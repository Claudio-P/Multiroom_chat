const app = require('./config/server');

const server = app.listen(3000, () => {
    console.log('Running...');
});

const io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', (socket) => {
    console.log('Usuário conectado!');

    socket.on('disconnect', (sokcet) => {
        console.log('Usuário disconectado!');
    });

    socket.on('msgToServer', (data) => {
        socket.emit('msgToClient', { apelido : data.apelido, message : data.message });

        socket.broadcast.emit('msgToClient', { apelido : data.apelido, message : data.message });
    });

});