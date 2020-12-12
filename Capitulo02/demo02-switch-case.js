const readLine = require('readline')
const terminal = readLine.createInterface({
    //definir o modo de entrada via terminal
    input: process.stdin,
    // todo texto de saida saira no terminal
    output: process.stdout
})

// texto do menu

const textoMenu = `
Ola seja bem vindo ao sitema de media
Digite 1 para acessar o menu inicial
Digite 2 para acessar o menu de Herois
Digite 3 para acessar o menu de Guerreiras
Digite 0 para sair
`
console.log('textoMenu', textoMenu)
const opcao = 1
switch(opcao) {
    case 1:
        console.log('pressionou 1')
        break;
    case 2:
        console.log('pressionou 2')
        break;
    default:
        console.log('opcao invalida')
        break;
}
