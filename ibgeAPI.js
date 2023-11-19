//https://servicodados.ibge.gov.br/api/v2/censos/nomes/nathan

const axios = require("axios");

// URL base da API do IBGE
const ibgeApiBaseUrl = "http://servicodados.ibge.gov.br/api/v2/censos/nomes";

// Função para buscar informações de um nome
async function getNomeData(nome) {
    try {
        const response = await axios.get(`${ibgeApiBaseUrl}/${nome}`);
        const data = response.data;

        // Verificar se a resposta é um objeto
        if (typeof data === "object") {
            // Verificar se o objeto tem a propriedade 'res'
            if (data.hasOwnProperty('res')) {
                // Retorna apenas a propriedade 'res'
                return data.res;
            } else {
                // Retorna o objeto completo
                return data;
            }
        } else {
            console.error("Resposta da API do IBGE não é um objeto.");
            return null;
        }
    } catch (error) {
        console.error("Erro ao buscar informações do nome no IBGE API:", error.message);
        return null;
    }
}

module.exports = { getNomeData };

/*
async function buscaDadosApisComAxios() { 
const nome = 'nathan'
const response = await axios.get(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome}´)
console.log(response.data)
*/