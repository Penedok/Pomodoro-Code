const segundosPomodoro = 4000 // Estamos usando 4 segundos para testes. O tempo oficial é esse
const disparador = document.querySelector('#disparador')


disparador.addEventListener('click',()=>{
    console.log("disparador ativado")
    const segundoPomodoro =  4000 
    
    setTimeout(() => {
     alert("O seu tempo de produção do promodoro acabou. Vá Descansar!");
       clearInterval(contador) 

      }, segundoPomodoro)

    var contador = setInterval('contadorDeSegundos()', 1000)  
})

function contadorDeSegundos(){
    console.log('tick')
}


