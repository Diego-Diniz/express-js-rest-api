class UserController {
   
    async index(req, res){}

    async create(req, res){
        console.log(req.body);
        res.send('pegando o corpo da requisição!');
    }
}

module.exports = new UserController();