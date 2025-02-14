/* Função tradicional com 1 parãmetro e 1 linha de corpo */
function quadrado(n){
    return n * n
}

console.log('[TRADI] O quadrado de 7 é', quadrado(7))

/*
Função equivalente, usando a sintaxe arrow function
~> não necessita de chaves
~> não necessita de parênteses em torno do parãmetro
~> não necessita da palavra-chave "return"
~> a palavra-chave "function" è substituida pela flecha => Logo APÒS o parâmetro
~> a arrow function è invocada pelo nome da constante que a recebe
*/
const quadradoA = n => n * n

console.log('[ARROW] O quadrado de 7 è', quadradoA(7))

/* 
função tradicional com mais de um parãmetro è apenas
uma linha de corpo com return
*/
function calc(a, b, c) {
    return a * b + c
}
console.log('[TRADI] O resultado do càlculo è', calc(10, 20, 30))

/*
Equivalente na sintaxe arrow function
~> quando o numero dee parãmetros è DIFERENTE DE 1, os parênteses
voltam a ser obrigatorios
*/
const calcA = (a, b, c) => a * b + c
console.log('[ARROW] O resultado do càlculo è', calcA(10, 20, 30))

/*
Função tradicional sem parãmetros, com uma linha de corpo
*/
function msgErro(){
    return 'ERRO FATAL!!!'
}
console.log('[TRADI] Mensagem de erro:', msgErro())

/*
Equivalente na sintaxe arrow function
~> parãmetros vazios devem ser usados para marcar o lugar do parãmetro
*/
const msgErroA = () => 'ERRO FATAL!!!'
console.log('[ARROW] Mensgaem de erro:', msgErroA())

/*
Função tradicional com um parãmetro e vàrias linhas de corpo
*/
function fatorial(n) {
    let resultado = 1
    for (let i = n; i > 1; i--) resultado *= i
    return resultado
}
console.log('[TRADI] O fatorial de 8 è', fatorial(8))

/*
Equivalente na sintaxe arrow function
~> não hà economia de linhas no corpo da função 
~> as chaves voltam a ser obrigatorias
*/
const fatorialA = n => {
    let resultado = 1
    for(let i = n; i > 1; i--) resultado *= i
    return resultado
}
console.log('[ARROW] O fatorial de 8 è', fatorialA(8))

