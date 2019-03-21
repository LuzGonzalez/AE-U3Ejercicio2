const app = require('../server');

//Configurando el servidor HTTP
const server = require('http').Server(app);
const port = 3002;

//Ejecutando el servidor
server.listen(port);
console.log(`Running on port ${port}`);