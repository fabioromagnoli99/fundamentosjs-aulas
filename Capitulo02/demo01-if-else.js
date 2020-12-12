let frutaExistenteNoMercado = false
let temCPUSuficiente = true

// obter valores do terminal

const args = process.argv
const saldo = args[args.length -1]
if(isNaN(saldo)) {
    console.log('valor invalido!!')
    return;
}

let tipoCliente = "premium"
if(saldo < 9) {
    tipoCliente = "basic"
}
else if (saldo >=10 && saldo <20) {
    tipoCliente = "gold"
}
else {
    tipoCliente = null
}

//null, undefined, vazio, 0 ===false!
if(!tipoCliente) {
    tipoCliente = "indefinido"
}

console.log('tipoDoCliente', tipoCliente)
