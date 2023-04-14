
const disparador = document.querySelector('#disparador')

disparador.addEventListener('click',()=>{
    console.log("disparador ativado")
    const segundoPomodoro =  4000 
    setTimeout(() => {
        console.log("O seu tempo acabou");
      }, segundoPomodoro)


})


