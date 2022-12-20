//Questão 1
function calcQuadrados(a, b, c, d) {
    /* Retorna o valor base elevado a uma potência */
    let quadradoA = Math.pow(a, 2);
    let quadradoB = Math.pow(b, 2);
    let quadradoC = Math.pow(c, 2);
    let quadradoD = Math.pow(d, 2);
    let resultado = quadradoA + quadradoB + quadradoC + quadradoD;
    console.log(resultado);
  }
  
  calcQuadrados(1, 2, 3, 4);

//Questão 2
let numero = (num) => {
    if (num % 2 == 0) {
        console.log(`O número ${num} é par`)
    } else {
        console.log(`O número ${num} é ímpar`)
    }
    if (num > 0) {
        console.log(`O número ${num} é positivo`)
    } else {
        console.log(`O número ${num} é negativo`)
    }
  }
  
  numero(10)
  numero(11)
  numero(-10)
  numero(-11)
    
//Questão 3
const diaSemana = (dia) => {
    switch (dia) {
        case 1:
            return 'Domingo'
        case 2:
            return 'Segunda'
        case 3:
            return 'Terça'
        case 4:
            return 'Quarta'
        case 5:
            return 'Quinta'
        case 6:
            return 'Sexta'
        case 7:
            return 'Sábado'
        default:
            return 'Valor inválido'
    }
  }
  
  console.log(diaSemana(1))
  console.log(diaSemana(2))
  console.log(diaSemana(3))
  console.log(diaSemana(4))
  console.log(diaSemana(5))
  console.log(diaSemana(6))
  console.log(diaSemana(7))
  console.log(diaSemana(8))
  


