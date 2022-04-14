import explorers from './listaExplorers.js'

explorers.forEach(explorer => console.log(`El stack del usuario ${explorer.name} es: ${explorer.stack}.`))