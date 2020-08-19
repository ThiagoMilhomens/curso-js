const nome = 'Thiago'
const sobrenome = 'Antunes Milhomens'
const idade = 36
const peso = 125
const alturaEmM = 1.81
let imc
let anoNascimento

imc = peso / (alturaEmM * alturaEmM)
anoNascimento = 2020 - idade

//console.log(imc.toFixed(2), anoNascimento)

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg, tem ${alturaEmM} de altura e seu IMC é de ${imc.toFixed(2)}. ${nome} nasceu em ${anoNascimento}.`)
// Thiago Antunes Milhomens tem 36 anos, pesa 125 Kg, tem 1.81 de altura e seu IMC é de 38.16. Thiago nasceu em 1984.