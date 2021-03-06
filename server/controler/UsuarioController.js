const usuario = require('../models/UsuarioSchema');

class UsuarioController {

    async cadastrar(req, res) {
        try {

            var result = await usuario.findOne({
                "cpf": req.body.cpf
            });
            if (result) {
                res.status(500).json({
                    'mensagem': 'CPF já cadastrado'
                });
            } else {
                var result = await usuario.create(req.body);
                res.status(200).json(result);
            }

        } catch (error) {
            res.status(500).json(error);
        }
    }

    async logar(req, res) {
        var result = await usuario.findOne({
            "nome": req.body.nome,
            "senha": req.body.senha,
        });
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(403).json({
                'mensagem': 'Usuário ou senha inválida'
            });
        }
    }

    async buscar(req, res) {
        var result = await usuario.findOne({
            "cpf": req.params.cpf
        });
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(403).json({
                'mensagem': 'Usuário não encontrado'
            });
        }
    }

    async qusuario(req, res) {
        var result = await usuario.count();
        res.status(200).json(result);
    }

    async listar(req, res) {
        var result = await usuario.find({});
        res.status(200).json(result);
    }

    async alterar(req, res) {
        try {
            var result = await usuario.updateOne({
                "cpf": req.body.cpf,
            }, {
                "nome": req.body.nome,
                "endereco": req.body.endereco,
                "telefone": req.body.telefone,
                "email": req.body.email
            });
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async deletar(req, res) {
        try {
            var result = await usuario.deleteOne({
                "cpf": req.params.cpf
            });
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = new UsuarioController();