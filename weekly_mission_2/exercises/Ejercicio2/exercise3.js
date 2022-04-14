import explorers from './listaExplorers.js'

const stacks = explorers.map(usuario => usuario.stack)

console.log(stacks)
//console.log(stacks.forEach(stack_personal => console.log(`El stack del usuario es: ${stack_personal}.`)))