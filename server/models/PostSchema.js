const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

const post = new mongoose.Schema({
  descricao: {
    type: String,
    required: [true, "O campo descricao é obrigatório"],
  },
  fotos: {
    type: [String],
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuarios",
    require: [true, "O campo usuario é obrigatório"],
  },
  animais: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Animais",
    require: [true, "O campo animal é obrigatório"],
  }],
});

module.exports = mongoose.model("Posts", post);
