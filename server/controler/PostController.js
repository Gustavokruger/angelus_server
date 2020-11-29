const { deleteOne } = require("../models/PostSchema.js");
const post = require("../models/PostSchema.js");

class PostController {
  async cadastrar(req, res) {
    try {
      var result = await post.create(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async buscar(req, res) {
    var result = await post.findOne({
      _id: req.params.id,
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(500).json({
        mensagem: "Post não encontrado",
      });
    }
  }

  async buscarByUsuario(req, res) {
    var result = await post.find({
      usuario: req.params.usuarioId,
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(500).json({
        mensagem: "Post não encontrado",
      });
    }
  }

  async buscarByAnimal(req, res) {
    var result = await post.find({
      animal: req.params.animalId,
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(500).json({
        mensagem: "Post não encontrado",
      });
    }
  }

  async popularAnimaisOfPost(req, res) {
    var result = await post.findById({
      _id: req.params.postId,
    }).populate("animais");
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(500).json({
        mensagem: "Post não encontrado",
      });
    }
  }

  async listar(req, res) {
    var result = await post.find({});
    res.status(200).json(result);
  }

  async alterar(req, res) {
    try {
      var result = await post.updateOne({ _id: req.params.id }, req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deletar(req, res) {
    try {
      var result = await post.deleteOne({ _id: req.params.id });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new PostController();
