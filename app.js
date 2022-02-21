const express = require ("express");
const app = express();
const path = require('path');//brinda la funcion join o resolve y me deja unificar __dirname con la ruta relativa ya que necesito dar siempre la ruta absoluta

app.use(express.static(path.resolve(__dirname, "public")));//si no le explico a express que mi carpeta es de tipo estatica(publica), no va a compartir los archivos que se
//contengan en la misma por una cuestion de seguridad



app.listen(3000,()=>console.log("Server running in port 3000"));


/*app.get("/", function(req,res){
    res.send("hola")
});*/

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get('/register', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})










//instalar "node" en mi proyecto : npm init -y
//luego instalacion express: npm install express
//instalar nodemon: npm i nodemon
