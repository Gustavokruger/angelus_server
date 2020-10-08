const animal = require('../models/AnimalSchema');
const UsuarioSchema = require('../models/UsuarioSchema');

class AnimalController {    

    async cadastrar(req, res){
        try {
            
            var result = await animal.findOne({
                "id": req.body.id
            });
            if(result){
                res.status(200).json({
                    'mensagem': 'id já cadastrado'
                });
            }else{
                var result = await animal.create(req.body);
                res.status(201).json(result);
            }
 
        } catch (error) {
            res.status(500).json(error);
        }
    }
 
    async buscar(req, res){
        var result = await animal.findOne({
            "id": req.params.id
        });
        if(result){
            res.status(200).json(result);
        }else{
            res.status(200).json({
                'mensagem': 'Animal não encontrado'
            });
        }
    }

    async exibeadotar(req, res){
        var result = await animal.find({
            "adotado": req.params.adotado
        }).sort({criadoEm: -1}).populate('usuario');
        if(result){
            res.status(200).json(result);
        }else{
            res.status(200).json({
                'mensagem': 'Situação não encontrada'
            });
        }
    }



    async listar(req, res){
        var result = await animal.find().sort({criadoEm: -1}).populate('usuario');
        res.status(200).json(result);
    }

    async alterar(req, res){
        try {
            var result = await animal.updateOne({
                "id": req.body.id,
            }, {
                "tipo": req.body.tipo,
                "nome": req.body.nome,
                "idade": req.body.idade,
                "porte": req.body.porte,
                "sexo": req.body.sexo,
                "descricao": req.body.descricao,
                "status": req.body.status
            });
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async deletar(req, res){
        try {
            var result = await animal.deleteOne({
                "id": req.params.id
            });
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = new AnimalController();