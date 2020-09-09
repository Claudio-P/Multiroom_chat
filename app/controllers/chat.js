module.exports.startChat = function(app, req, res) {

    const formData = req.body;

    req.assert('apelido', 'Nome ou apelido é obrigatório!').notEmpty();
    req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres!').len(3, 15);

    const error = req.validationErrors();

    if(error) return res.render('index', { validation : error });

    res.render('chat');
};