//1. Verificação de Idade
var maiorde = 188
    if (maiorde > 18) {
        console.log('Você é maior de idade')
    } else if (maiorde == 18) {
        console.log('Você é maior de idade')
    } else {
        console.log('VocÊ é menor de idade')
    }

//2. Dia da Semana

var Dia_da_Semana = 'Terç'
    switch (Dia_da_Semana) {
     case 'Segunda' :
        console.log('O dia da semana é Segunda-Feira')
        break;
     case 'Terça' :
        console.log('O dia da semana é Terça-Feira')
        break;
     case 'Quarta' :
        console.log('O dia da semana é Quarta-Feira')
        break;
     case 'Quinta' :
        console.log('O dia da semana é Quinta-Feira')
        break;
     case 'Sexta' :
        console.log('O dia da semana é Sexta-Feira')
        break;
     case 'Sábado' :
        console.log('O dia da semana é Sábado')
        break;
     case 'Domingo' :
        console.log('O dia da semana é Domingo')
        break;

    default:
        console.error('A palavra inserida pode estar errada, verifique novamente.')
        break;
}

//3. Verificação de número: par ou ímpar
var numero = 50
if (numero % 2 == 0) {
    console.log('O numero é Par')
} else {
    console.log('O numero é Ímpar')
}

//4. Cálculo de Desconto
const valorUnidade = 101
const quantidadeComprada = 3
const totalSemDesconto = valorUnidade * quantidadeComprada

if (totalSemDesconto > 100) {
    const taxaDesconto = 10
    const desconto = (totalSemDesconto * taxaDesconto) / 100
    const totalComDesconto = totalSemDesconto - desconto

    console.log(`Total com Desconto: R$ ${totalComDesconto}`)
} else {
    console.log(`Total a ser pago: R$ ${totalSemDesconto}`)
}

//5. Verificação de Número Positivo ou Negativo
var numero = 22 
if (numero > 0){
    console.log('O numero é positivo')
    }else if(numero == 0){
    console.log('O numero é igual a zero')
    } else {
    console.log('O numero é negativo')
    }