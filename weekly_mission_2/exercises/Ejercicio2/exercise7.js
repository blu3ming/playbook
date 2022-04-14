import explorers from './listaExplorers.js'

//const finishedExercises = explorers.map(usuario => usuario.missions.onboarding.exercisesFinished)
const exercisesFinishedTrue = explorers.some((completados) =>  completados.missions.onboarding.exercisesFinished === true)

if (exercisesFinishedTrue == true){console.log("Al menos uno de los explorers ha terminado los ejercicios del onboarding")}
else{console.log("Ninguno de los explorers ha finalizado los ejercicios del onboarding")}