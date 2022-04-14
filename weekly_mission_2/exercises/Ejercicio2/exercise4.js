import explorers from './listaExplorers.js'

const stackWithJS = explorers.filter(usuario => 
    usuario.stack.includes("js")
)

//console.log(stackWithJS)
console.log("Usuarios con 'JS' en su stack")
console.log(stackWithJS.forEach((usuario) => console.log(`El stack del usuario ${usuario.name} es: ${usuario.stack}.`)))