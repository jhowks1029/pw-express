//import externo
import express from "express"

//--------------------


//import local

//aritmetricas
import { soma } from "./aritmetricas/soma.js";
import { divisao } from "./aritmetricas/divisao.js";
import { multiplicacao } from "./aritmetricas/multiplicacao.js";
import { potencia } from "./aritmetricas/potencia.js";
import { raiz } from "./aritmetricas/raiz.js";
import { resto } from "./aritmetricas/resto.js";
import { subtracao } from "./aritmetricas/subtracao.js";

//condicionais
import { ifComposto } from "./condicionais/ifComposto.js";
import { ifSimples } from "./condicionais/ifSimples.js";
import { switchCase } from "./condicionais/switchCase.js";
import { ternario } from "./condicionais/ternario.js";

//lacos
import { doWhile } from "./lacos/doWhile.js";
import { forEachFunc } from "./lacos/forEach.js";
import { forLoop } from "./lacos/forLoop.js";
import { mapFunc } from "./lacos/map.js";
import { whileLoop } from "./lacos/whileLoop.js";

//logicos
import { and } from "./logicos/and.js";
import { not } from "./logicos/not.js";
import { or } from "./logicos/or.js";

//relacionais
import { diferente } from "./relacionais/diferente.js";
import { igual } from "./relacionais/igual.js";
import { maior } from "./relacionais/maior.js";
import { maiorIgual } from "./relacionais/maiorIgual.js";
import { menor } from "./relacionais/menor.js";
import { menorIgual } from "./relacionais/menorIgual.js";

//vetores
import { acumular } from "./vetores/acumular.js";
import { adicionar } from "./vetores/adicionar.js";
import { buscar } from "./vetores/buscar.js";
import { remover } from "./vetores/remover.js";

//------------------


const app = express();

app.get("/", (req, res) => {
    res.send("Servidor funcionando");
});

app.get("/json", (req, res) => {
    res.json({ nome: "Jhonata", idade: 18 });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");

app.get("/dividir", (req, res) => {
    const resultado = divisao(10, 2);
    res.send(`Resultado: ${resultado}`);
});
});