const express = require("express");
const app = express();
const port = 1212;
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./Models/Post");
//config bodyParser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//rotas

app.get('/', (req,res)=>{
  Post.findAll({order:[['id', 'DESC']]}).then((posts)=>{
    
    res.render('home', {posts: posts})
    
  })
})

app.get("/cad", (req, res) => {
  res.render("formulario");
});

app.post("/add", (req, res) => {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  })
    .then(() => {
      res.redirect('/')
    })
    .catch((erro) => {
      res.send(`Houve um erro ${erro}`);
    });
});

app.get('/delet/:id',(req,res)=>{
  Post.destroy({where:{'id': req.params.id}}).then(()=>{
    res.redirect('/')
  }).catch((erro)=>{
    res.send(`essa postagem não existe`)
  })
})

// config
//templete engine -
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(port, () => console.log(`Server on mlk, na porta ${port}!`));
