let media = 7.4, resultado

if(media >= 6) {
    resultado = 'APROVADO'
}
else {
    resultado = 'Reprovado'
}
console.log('Media:', media, ', situação:', resultado)

// Usando o operador ternàrio
resultado = media >= 6 ? 'APROVADO' : 'Reprovado' 

console.log('Media:', media, ', situação:', resultado)

let user = 'quest', msg
/*
Quando hà apenas uma linha apòs um if, um while, etc.
podemos omitir as chaves
*/
if(user === 'admin') msg = 'Bem-vindo!'
else msg = 'Acesso negado'

console.log(user, msg)

// Usando o operador ternàrio
msg = user === 'admin' ? 'Bem vindo!' : 'Acesso negado'

console.log(user, msg)