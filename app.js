import express from 'express'
import hbs from 'hbs'
import * as url from 'url';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app=express()

//Para subir la pagina a un hosting, hay que configurar el port
//Creamos una variable de enterno 
const port=process.env.PORT


//Servir contenido estatico
app.use(express.static('public')) 

//Handlebars
app.set('view engine', 'hbs');
//Da acceso a la carpeta partials
hbs.registerPartials(__dirname + '/views/partials');


//Muestra los archivos y renderiza
app.get('/',function(req,res){
    res.render('home',{
        nombre:'Estiben Fernández',
        titulo:'Curso de NodeJs renderizando con hbs'
    })
})

app.get('/generic',function(req,res){
    res.render('generic',{
        nombre:'Estiben Fernández',
        titulo:'Curso de NodeJs renderizando con hbs'
    })
})

app.get('/elements',function(req,res){
    res.render('elements',{
        nombre:'Estiben Fernández',
        titulo:'Curso de NodeJs renderizando con hbs'
    })
})






//* indica cualquier otra ruta
app.get('*',function(req,res){
    res.sendFile( __dirname + '/public/404.html')
})

app.listen(port,()=>{
    console.log(`Escuchandando desde puerto ${port}`)
})