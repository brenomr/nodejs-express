// Definição das variáveis do express e consign
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
    // Configuração do app com Express
    const app = express();

    // Chamando bibliotecas com o app
    app.use(bodyParser.urlencoded({extend: true}));
    app.use(bodyParser.json());

    // Informa ao consign onde ele deve procurar pelas rotas (controllers) e onde ele deve incluí-las (app)
    consign()
        .include('controllers')
        .into(app)
    
    return app;
}
