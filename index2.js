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
    res.json("Servidor funcionando");
});

app.get("/json", (req, res) => {
    res.json({ nome: "Jhonata", idade: 18 });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");

app.get("/soma", (req, res) => {
    const resultado = soma(10, 2);
    res.json(`Resultado: ${resultado}`);
});

app.get("/dividir", (req, res) => {
    const resultado = divisao(10, 2);
    res.json(`Resultado: ${resultado}`);
});

app.get("/multiplicacao", (req, res) => {
    const resultado = multiplicacao(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/potencia", (req, res) => {
    const resultado = potencia(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/raiz", (req, res) => {
    const resultado = raiz(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/resto", (req, res) => {
    const resultado = resto(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/subtracao", (req, res) => {
    const resultado = subtracao(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/ifcomposto", (req, res) => {
    const resultado = ifComposto(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/ifsimples", (req, res) => {
    const resultado = ifSimples(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/switchcase", (req, res) => {
    const resultado = switchCase(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/ternario", (req, res) => {
    const resultado = ternario(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/dowhile", (req, res) => {
    const resultado = doWhile(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/foreach", (req, res) => {
    const resultado = forEachFunc(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/forloop", (req, res) => {
    const resultado = forLoop(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/map", (req, res) => {
    const resultado = mapFunc(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/whileloop", (req, res) => {
    const resultado = whileLoop(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/and", (req, res) => {
    const resultado = and(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/not", (req, res) => {
    const resultado = not(10, 2);
    res.json(`Resultado: ${resultado}`);
});

app.get("/or", (req, res) => {
    const resultado = or(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/diferente", (req, res) => {
    const resultado = diferente(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/igual", (req, res) => {
    const resultado = igual(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/maior", (req, res) => {
    const resultado = maior(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/maiorigual", (req, res) => {
    const resultado = maiorIgual(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/menor", (req, res) => {
    const resultado = menor(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/menorigual", (req, res) => {
    const resultado = menorIgual(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/acumular", (req, res) => {
    const resultado = acumular(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/adicionar", (req, res) => {
    const resultado = adicionar(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/buscar", (req, res) => {
    const resultado = buscar(10, 2);
    res.json(`Resultado: ${resultado}`);
});
app.get("/remover", (req, res) => {
    const resultado = remover(10, 2);
    res.json(`Resultado: ${resultado}`);
});

});
