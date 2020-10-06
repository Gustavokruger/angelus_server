const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

const usuario = new mongoose.Schema({

  nome: {
    type: String,
    required: [true, "O campo nome é obrigatório"],
  },
  cpf: {
    type: String,
    required: [true, "O campo cpf é obrigatório"],
  },
  
  endereco: {
    type: String,
    required: [true, "O campo endereco é obrigatório"],
  },

  telefone: {
    type: String,
    required: [true, "O campo telefone é obrigatório"],
  },

  email: {
    type: String,
    required: [true, "O campo email é obrigatório"],
  },

  criadoEm: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model("Usuarios", usuario);