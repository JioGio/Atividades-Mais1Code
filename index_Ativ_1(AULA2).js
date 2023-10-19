//Atividade Aula 2
        //1.Soma Simples
        var IntC  = 545
        var IntD = 25
        var totalsoma = IntC + IntD
        console.log(totalsoma)

    //2.Calculadora de Juros
        var valorprinciapl = 5000.00
        var taxa = 0.20
        var meses = 16
        var Juros = valorprinciapl * taxa * meses
        console.log(Juros)
        var montante = valorprinciapl + Juros
        console.log(montante)

    //3.conversor de Temperatura
        var Celsius = 27
        var Fahrenheit = (Celsius * 9/5) + 32
        console.log(Fahrenheit)

    //4.Cálculo de Media
        var Fisica1 = 2
        var Fisica2 = 1.5
        var Fisica3 = 3
        var MediaFisica = Fisica1 + Fisica2 + Fisica3
       
        console.log(`Media Fisica: ${MediaFisica}`)

    //5.Calculadora de IMC
    let peso = 78
    let altura = 1.65
    let IMC = peso / (altura ** 2)
    console.log(IMC)  


                    const resultado1 = document.querySelector('#resultado')
                    const altura1 = document.querySelector('#altura')
                    const peso1 = document.querySelector('#peso')
                    const calcIMC = () => {
                        if (altura.value != '' && peso.value != '') {
                            const IMC1 = (peso.value / (altura.value * altura.value)).toFixed(2)
                            let classification = ''
                            if(IMC1 < 18.5) {
                                classification = 'Abaaixo do peso'
                            } else if (IMC1<25) {
                                classification = 'Peso Normal'                    
                            } else if (IMC1<30) {
                                classification = 'Acima do peso'
                            } else if (IMC1<35) {
                                classification = 'Obesidade Grau I'
                            } else if (IMC1<41) {
                                classification = 'Obesidade Grau II'
                            } else {
                                classification = 'Obesidade Grau III'
                            }
                            resultado.innerHTML = `IMC: ${IMC1} (${classification})`
                        } else {
                            resultado.innerHTML = 'Preencha os Campos'
                        }
                    }

    //6.Divisão e Resto
    // Usa % pra calcular o resto(sobra) da divisão
    let dividendo = 15;
    let divisor = 4;
    let quociente = Math.floor(dividendo / divisor); // Usando Math.floor para obter um quociente inteiro
    let resto = dividendo % divisor;
    console.log('Quociente:', quociente);
    console.log('Resto:', resto); //pq aqui usou virgula? qual a diferença?

    //7.Calculadora de Descontos
    // Préço com Desconto = Valor Original - (Valor Original) * Porcentagem de Desconto / 100)
    let ValorOriginal = 7500
    let PorcentagemDesconto = 80
    let PreçocomDesconto = ValorOriginal - (ValorOriginal * (80 / 100))
    console.log(`Valor com Desconto: ${PreçocomDesconto}`)

    //8.Conversor de Moeda
    var dolar = 500
    var valordolarunitario = 5.17 //cotação 3 de out, 17:58
    var real = dolar * valordolarunitario
    console.log(`Conversão Dolar pra real: ${real}`)

    //9.Tabuada
    var inteiro = 9
    //Como fazer pros fatores ficarem um do lado do outro semocupar tanto espaço?
    let Fator1 = 1
    let Fator2 = 2
    let Fator3 = 3
    let Fator4 = 4
    let Fator5 = 5
    let Fator6 = 6
    let Fator7 = 7
    let Fator8 = 8
    let Fator9 = 9
    let Fator10 = 10
    var sequencia = inteiro * Fator5
    console.log(sequencia)

    //10.Cálculo Fatorial
        //Tenho duvidas
    function calcularFatorial(n) {
        // Caso base: fatorial de 0 é 1
        if (n === 0) {
            return 1;
        } else {
            // Caso recursivo: n! = n * (n-1)!
            return n * calcularFatorial(n - 1);
        }
    }
    // Exemplo de uso da função
    let numero = 5; // Substitua pelo número para o qual você deseja calcular o fatorial
    let fatorial = calcularFatorial(numero);
    console.log(`${numero}! = ${fatorial}`);