const express = require('express');
const app = express();

app.get('/makers/:name', (req, res) => {
    if(req.params.name){
        let valor = req.params.name;
        let mayuscula = "";
        mayuscula = valor.charAt(0).toUpperCase() + valor.slice(1);
        res.send(`<h1>Hola ${mayuscula}!</h1>`);
    }else{
        res.send('<h1>Hola desconocido!</h1>');
    }
  
});

app.listen(3000, () => console.log('Listening on port 3000!'));