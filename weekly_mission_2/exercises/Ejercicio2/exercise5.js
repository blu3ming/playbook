import explorers from './listaExplorers.js'

const cdmxUser = explorers.find(usuario => 
    usuario.city == "CDMX"
)

console.log("Primer usuario de CDMX")
console.log(cdmxUser)