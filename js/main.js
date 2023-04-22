const milssegundosPomodoro = 4000 // Estamos usando 4 segundos para testes. O tempo oficial é esse
const disparador = document.querySelector('#disparador')
let  milissegundosRestantes = milssegundosPomodoro -1000;
let contador


disparador.addEventListener('click',()=>{
    console.log("disparador ativado")
    
    console.log('faltam', (milssegundosPomodoro/1000))  

    contador = setInterval('contadorDeSegundos()', 1000)
  
    
   
})

function contadorDeSegundos(){
  
    if(milissegundosRestantes == 0){
        console.log("Acabou o pomodoro");
        alert("O seu tempo de produção do pomodoro acabou. Vá descansar");

        clearInterval(contador)
    }else{
        console.log('faltam', (milissegundosRestantes/1000))
    }

    milissegundosRestantes -=1000;
  
}


