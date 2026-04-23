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

//------------------
// ARITMETICAS

app.get("/soma/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = soma(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

app.get("/dividir/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = divisao(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

app.get("/multiplicacao/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = multiplicacao(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

app.get("/potencia/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = potencia(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

app.get("/raiz/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = raiz(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

app.get("/resto/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = resto(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

app.get("/subtracao/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = subtracao(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

//------------------
// CONDICIONAIS

app.get("/ifcomposto/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = ifComposto(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

app.get("/ifsimples/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = ifSimples(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

app.get("/switchcase/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = switchCase(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

app.get("/ternario/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = ternario(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

//------------------
// LACOS

app.get("/dowhile/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = doWhile(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

app.get("/foreach/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = forEachFunc(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

app.get("/forloop/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = forLoop(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

app.get("/map/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = mapFunc(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

app.get("/whileloop/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = whileLoop(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

//------------------
// LOGICOS

app.get("/and/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = and(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

app.get("/not/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = not(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

app.get("/or/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = or(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

//------------------
// RELACIONAIS

app.get("/diferente/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = diferente(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

app.get("/igual/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = igual(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

app.get("/maior/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = maior(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

app.get("/maiorigual/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = maiorIgual(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

app.get("/menor/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = menor(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

app.get("/menorigual/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = menorIgual(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

//------------------
// VETORES

app.get("/acumular/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = acumular(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

app.get("/adicionar/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = adicionar(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

app.get("/buscar/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = buscar(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

app.get("/remover/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const resultado = remover(Number(a), Number(b));
    res.json(`Resultado: ${resultado}`);
});

//------------------

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
