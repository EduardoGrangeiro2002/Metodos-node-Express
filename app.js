const { json } = require('express');
const express = require('express');
const { dirname } = require('path');

const path = require('path')

const app = express()

app.use('/meusite', express.static(path.join(__dirname,'client')))

app.get("/", (req, res)=>{


  
    res.send("<h1>HELLO WORLD FROM GET</h1>")

    
})

app.post("/", (req, res)=>{



    res.send("<h1>HELLO WORLD FROM POST</h1>")

    
})
app.put("/", (req, res)=>{



    res.send("<h1>HELLO WORLD FROM PUT</h1>")

    
})
app.delete("/", (req, res)=>{



    res.send("<h1>HELLO WORLD FROM DELETE</h1>")

    
})



const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta:${PORT}`);
})