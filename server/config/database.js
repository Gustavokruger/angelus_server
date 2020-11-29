const mongoose = require("mongoose");

//mongodb+srv://jonatanpereira:marcelyn@ciclospagamento.vheju.gcp.mongodb.net/ciclospagamento?retryWrites=true&w=majority

const db = mongoose.connect("mongodb+srv://provadevweb2:provadevweb2@cluster0.tzvgo.mongodb.net/angeluz?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Conexão estabelecida com o banco de dados...");
});

mongoose.connection.on("error", (error) => {
  console.log(`Algum erro aconteceu com a conexão do banco. \n${error}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Desconectamos com o banco de dados...");
});

module.exports = db;