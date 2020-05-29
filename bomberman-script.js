let bombArray;
let score  = 0
const redselect = 'redselect'
const greenselect = 'greenselect'
const cellElements = document.querySelectorAll('.cell')
const winningMessageDisplay = document.querySelector('.messageDisplay')
const winningMessage = document.getElementById('winningMessage')
const restartButtton = document.querySelector(".restartButton")
const scoreElement = document.querySelector(".scoreElement")
console.log(document.querySelector('body'))
startGame()
restartButton.addEventListener('click',startGame);
function startGame(){
    score = 0
    bombArray = []
    createArray()
    console.log(bombArray)
    cellElements.forEach(cell =>{
        cell.classList.remove(redselect,greenselect,"disabled");
        cell.removeEventListener('click',toClickClass)
        cell.addEventListener('click',toClickClass,{once:true})
    })
    winningMessage.classList.remove("show")
}

function toClickClass(e){
    let cell = e.target
    //console.log(cell)
    let fail = false
    bombArray.forEach(curr =>{
        //console.log(curr,cell.id)
        if (curr == cell.id){
            fail = true;
        }
    })

    checkClass(cell,fail);
    //console.log(fail)
}

function checkClass(cell,fail){
    if (fail){
        
        makeDisable()
        console.log(cell)
        //cell.classList.add(redselect)
        //console.log(cell)
        document.getElementById('bomb').classList.add('show')
        setTimeout(function(){
            document.getElementById('bomb').classList.remove('show')
        },500)
        cell.classList.add(redselect)
        displayBombs()
        //hideBombs()
        //console.log("boom")
        //console.log(score);
        winningText(score)
        //displayBombs()
        
    }
    else{
        let r = Math.ceil(Math.random()*5)
        document.getElementById('emoji'+r).classList.add('show')
        console.log(document.getElementById('emoji'+r))
        setTimeout(function(){
            document.getElementById('emoji'+r).classList.remove('show')
        },500)
        cell.classList.add(greenselect)
        score++;
        if (score === 71){
            makeDisable();
            winningText(score);
        }
        
    }
}

function winningText(score){
    //console.log(score)
    if (score === 71){
        scoreElement.innerHTML = `score : ${score}`
        winningMessageDisplay.innerHTML = 'congratulations you won'
        //console.log("1")
        
    }
    else{
        scoreElement.innerHTML = `score : ${score}`
        winningMessageDisplay.innerHTML = 'Best of luck'
        //console.log("2")

        
    }
    console.log(winningMessageDisplay)
    setTimeout(function(){
        winningMessage.classList.add('show')
    },3000)
    
}
function makeDisable(){
    cellElements.forEach(cell => {
        cell.classList.add("disabled");
    });
};

function bombDisplay(){
    console.log(document.getElementById('bomb'))
    document.getElementById('bomb').classList.add('show')
}
function displayBombs(){

        bombArray.forEach(cell => {
            setTimeout(function(){
                document.getElementById(cell).classList.add(redselect);
                console.log(document.getElementById(cell))
                
            },1000)
            //console.log(cell)
            setTimeout(function(){
                document.getElementById(cell).classList.remove(redselect);
                console.log(document.getElementById(cell))
                
            },2500)

    })   
}
function createArray(){
    bombArray.push(Math.ceil(Math.random()*81))
    for(let i=0;i<9;i++){
            let random = Math.ceil(Math.random()*81)
            for(let j=0;j<bombArray.length;i++){
                if (random !== bombArray[j]){
                    bombArray.push(random)
                    break
                }
                else{
                    continue;
                }
            }
    }
}
function hideBombs(){
    bombArray.forEach(cell=>{
        document.getElementById(cell).classList.remove(redselect);
        console.log(document.getElementById(cell))
    })
}