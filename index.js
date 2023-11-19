const express = require("express");
const cors = require("cors");
const app = express();
const consign = require("consign");
const path = require('path');
const database = require(path.join(__dirname, "config", "database"));
const ibgeAPI = require(path.join(__dirname, "ibgeAPI"));

app.use(cors());
app.use(express.json());
app.database = database;

consign()
    .include("api")
    .then("routes")
    .into(app);

// Rota para buscar informações do nome
app.route("/buscar-nome/:nome")
    .get(async (req, res) => {
        const { nome } = req.params;

        const nomeData = await ibgeAPI.getNomeData(nome);
        if (nomeData === null) {
            res.status(500).json({ error: "Erro ao buscar informações do nome" });
        } else {
            res.json(nomeData);
        }
    });

//Iniciar o servidor
app.listen({
    port: process.env.PORT || 3000,
});