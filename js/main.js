
const disparador = document.querySelector('#disparador')


disparador.addEventListener('click',()=>{
    console.log("disparador ativado")
    const segundoPomodoro =  4000 
    
    setTimeout(() => {
     alert("O seu tempo de produção do promodoro acabou. Vá Descansar!");
      }, segundoPomodoro)


})


