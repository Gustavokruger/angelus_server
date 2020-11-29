const express = require('express');
const router = express.Router();

const usuario = require("../controler/UsuarioController");

router.use((req, res) => {
    console.log({
        url: req.url,
        method: req.method
    });

    req.next();
});

router.post('/usuario/cadastrar', usuario.cadastrar);
router.get('/usuario/buscar/:cpf', usuario.buscar);
router.get('/usuario/listar', usuario.listar);
router.put('/usuario/alterar', usuario.alterar);
router.delete('/usuario/remover/:cpf', usuario.deletar);
router.get('/usuario/qusuario/', usuario.qusuario);

const animal = require("../controler/AnimalController");

router.post('/animal/cadastrar', animal.cadastrar);
router.get('/animal/buscar/:id', animal.buscar);
router.get('/animal/listar', animal.listar);
router.put('/animal/alterar', animal.alterar);
router.delete('/animal/remover/:id', animal.deletar);
router.get('/animal/exibeadotar/:adotado', animal.exibeadotar);
router.get('/animal/qanimal/:adotado', animal.qanimal);

const post = require("../controler/PostController.js");

router.post("/post/cadastrar", post.cadastrar);
router.get("/post/buscar/usuario/:usuarioId", post.buscarByUsuario);
router.get("/post/buscar/animal/:animalId", post.buscarByAnimal);
router.get("/post/popular/animal/:postId", post.popularAnimaisOfPost);
router.get("/post/buscar/:id", post.buscar);
router.get("/post/listar", post.listar);
router.put("/post/alterar/:id", post.alterar);
router.delete("/post/remover/:id", post.deletar);

module.exports = router;
