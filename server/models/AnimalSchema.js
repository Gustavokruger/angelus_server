const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

const animal = new mongoose.Schema({

  id: {
    type: Number,
    required: [true, "O campo id é obrigatório"],
  },

  tipo: {
    type: String,
    required: [true, "O campo do tipo do animal é obrigatório"],
    uppercase: true,
    enum: ["CACHORRO", "GATO", "AVE"],
  },

  nome: {
    type: String,
    required: [true, "O campo nome é obrigatório"],
  },

  idade: {
    type: Number,
    required: [true, "O campo idade é obrigatório"],
  },
  
  porte: {
    type: String,
    required: [true, "O campo do porte é obrigatório"],
    uppercase: true,
    enum: ["PEQUENO", "MÉDIO", "GRANDE"],
  },

  sexo: {
    type: String,
    required: [true, "O campo do sexo é obrigatório"],
    uppercase: true,
    enum: ["MACHO", "FÊMEA"],
  },

  descricao: {
    type: String,
    required: [true, "O campo descrição é obrigatório"],
  },

  status: {
    type: String,
    required: [true, "O campo do status é obrigatório"],
    uppercase: true,
    enum: ["PARA ADOÇÃO", "ADOTADO"],
  },


  criadoEm: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model("Animais", animal);