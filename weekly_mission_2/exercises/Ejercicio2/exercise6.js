import explorers from './listaExplorers.js'

const totalExercises = explorers.map(completados => completados.exercises_completed)
const completedExercises = totalExercises.reduce((acc, ejercicios) => acc + ejercicios,0)

console.log(`Total de ejercicios completados por los explorers: ${completedExercises}`)
//console.log(totalExercises)
//console.log(completedExercises)