const app = require('./config/server');

const server = app.listen(3000, () => {
    console.log('Running...');
});

const io = require('socket.io').listen(server);

io.on('connection', (socket) => {
    console.log('Usuário conectado!');

    socket.on('disconnect', (sokcet) => {
        console.log('Usuário disconectado!');
    });
});