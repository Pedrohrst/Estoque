const express = require('express');
const axios = require('axios');
const env = require('dotenv').config();
const app = express();
const port = process.env.PORT || 8080;

app.get('/',(req, res) => {
    res.send('Funcionado');
});

app.get('/products', async (req, res) => {
    try{
        const resposta = await axios.get('https://fakestoreapi.com');
        res.json(resposta.data);
    }catch(error){
        console.log("erro ao Buscar produtos: "+ error.mensagem + error.status());
        console.log("console");
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });