const express =  require("express"); 
const path= require('path'); 
const app = express();
const hbs = require("hbs"); 
const port = 3000; 
const joiningPath =path.join(__dirname, "../public" ); 
const TemplatePath =path.join(__dirname, "../templates/views" ); 
const partialsPath =path.join(__dirname, "../templates/partials" ); 

hbs.registerPartials(partialsPath); 
app.set('view engine', 'hbs');

console.log(partialsPath);
console.log(TemplatePath);
app.set('views', TemplatePath)
app.use(express.static(joiningPath))    
console.log(joiningPath);

app.get('/' , (req, res)=>{
   
    res.render('index')
}); 
app.get('/nav' , (req, res)=>{
   
    res.render('navbar'); 
}); 


app.listen(port ,()=>{
    console.log("port start at server "+ `${port}`); 
})  

