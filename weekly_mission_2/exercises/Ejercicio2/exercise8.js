import explorers from './listaExplorers.js'

const isFinishedTrue = explorers.every((usuarios) =>  usuarios.missions.onboarding.isFinished === true)

if (isFinishedTrue == true){console.log("Todos los explorers han terminado el onboarding")}
else{console.log("No todos los explorers han finalizado el onboarding")}