// -------------------------------------

/**
 * Função que calcula a soma de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A soma dos dois numeros
 */
function soma(a, b) {
  // @todo implementar retorno da operação aqui
let a = 10;
let b = 15;

let soma = a + b;

console.log('Resultado da operação: ', soma);

function soma(a, b) {
  return a + b;
}

let valorsoma = soma(10, 15);

console.log(valorsoma);
}

/**
 * Função que calcula a multiplicação de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A multiplicação dos dois numeros
 */
function multiplicacao(a, b) {
  // @todo implementar retorno da operação aqui
let a = 10;
let b = 15;

let multiplicacao = a * b;

console.log('Resultado da operação: ', multiplicacao);

function multiplicacao(a, b) {
  return a * b;
}

let valormulti = multiplicacao(10, 15);

console.log(valormulti);
}

/**
 * Função que calcula a divisão de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A divisão dos dois numeros
 */
function divisao(a, b) {
  // @todo implementar retorno da operação aqui
let a = 10;
let b = 15;

let divisao = a / b;

console.log('Resultado da operação: ', divisao);

function divisao(a, b) {
  return a / b;
}

let valordivisao = divisao(10, 15);

console.log(valordivisao);
}

/**
 * Função que calcula a subtração de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A subtração dos dois numeros
 */
function subtracao(a, b) {
  // @todo implementar retorno da operação aqui
let a = 10;
let b = 15;

let subtracao = a - b;

console.log('Resultado da operação: ', subtracao);

function subtracao(a, b) {
  return a - b;
}

let valorsubtracao = subtracao(10, 15);

console.log(valorsubtracao);
}

/**
 * Função que resto da divisão de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O resto da divisão dos dois numeros
 */
function modulo(a, b) {
  // @todo implementar retorno da operação aqui
let a = 10;
let b = 15;

let modulo = a % b;

console.log('Resultado da operação: ', modulo);

function modulo(a, b) {
  return a % b;
}

let valormodulo = modulo(10, 15);

console.log(valormodulo);
}

/**
 * Função que calcula o maior número entre 2
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O maior número
 */
function max(a, b) {
  // @todo implementar retorno da operação aqui
let a = 10;
let b = 15;

let max = a > b;

console.log('Resultado da operação: ', max);

function max(a, b) {
  if(a > b)
  return a;
  else return b;
}

let valormaior = max(10, 15);

console.log(valormaior)
}

// -------------------------------------

/**
 * Função que concatena 2 strings utilizando template strings
 * @param {string} a - A primeira string
 * @param {string} b - A segunda string
 * @returns {string} As 2 strings concatenadas
 */
function strConcat(a, b) {
  // @todo implementar retorno da operação aqui
let str1 = "Gustavo";
let str2 = "Gislon";

let concat = str1 + ' ' + str2;

console.log('Concat: ', concat);

// OU...

let concat2 = `${str1} ${str2}`;
console.log('Concat2: ', concat2);

function strConcat(str1, str2){
  return str1 + ' ' + str2;
}

let string1 = strConcat(Gustavo, Gislon);
console.log(string1);
}

// --------------------------------------

/**
 * Função que implementa controle de fluxo
 * 
 * @param {number} numero - O número em questão
 * @returns {string} 
 *  - "Maior que 10" quando o número é maior que 10
 *  - "Igual a 10" quando o número é igual a 10
 *  - "Menor que 10" quando o número é menor que 10
 */
function retornaNumero(numero) {
  // @todo implementar retorno da operação aqui
  let num = 15

if (num < 10) {
  console.log("O numero é menor que 10.");
}
else if (num = 10) {
  console.log("O numero é igual a 10.");
}
else (num > 10) {
  console.log("O numero é maior que 10.");
}
}

// --------------------------------------

/**
 * Função que valida se o número em questão é positivo
 * @param {number} num - Número em questão
 * @returns {boolean} Retorna true para números positivos
 */
function ehPositivo(num) {
  // @todo implementar retorno da operação aqui
  let num = 5

  if (num > 0) {
    console.log("True");
  }
  else (num < 0) {
    console.log("False")
  }
}

module.exports = 
{ 
  soma,
  multiplicacao,
  divisao,
  subtracao,
  modulo,
  max,
  strConcat,
  retornaNumero,
  ehPositivo
};
