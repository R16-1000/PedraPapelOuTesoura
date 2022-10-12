let elementos = document.querySelectorAll('.player-options div > img ')
let playerOpt = ""
let inimigoOpt = ""

function resetInimigo(){
    const enemyOptions = document.querySelectorAll('.enemy-options div')
    for (let i = 0;i < enemyOptions.length;i++) {
            enemyOptions[i].childNodes[0].style.opacity = 0 
    }
}

function inimigoJogar(){
    let rand = Math.floor(Math.random()*3) // multiplica, aredonda e gera um número aleatório entre 0 e 2 
    //alert(rand)
    const enemyOptions = document.querySelectorAll('.enemy-options div')
    //alert(enemyOptions.length)

    resetInimigo()
    for (let i = 0;i < enemyOptions.length;i++) {
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt')
        }  
    }

    alert('playerOpt')
    alert('inimigoOpt')
}

function resetOpacityPlayer(){
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.opacity = 0.3 //deixar claro
    }
}

for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click',(t)=>{

        resetOpacityPlayer()
        t.target.style.opacity = 1 //deixar totalmente visivel 
        playerOpt = t.target.getAttribute('opt')
        
        inimigoJogar()
        //alert(playerOpt)
    })  
}