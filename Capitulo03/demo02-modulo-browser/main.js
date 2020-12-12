window.onload = () => {
    console.log('tela carregou!!')
    const btn = document.getElementById('btnCalcular')
    btn.onclick = click
    function obtervalorInput(id) {
        const item = document.getElementById(id)
        return item.value
    }

    function click() {
        const tipoOperacao = obtervalorInput('tipoOperacao')
        const valor1 = obtervalorInput('valor1')
        const valor2 = obtervalorInput('valor2')
        const resultado = Matematica[tipoOperacao](
           valor1, valor2
       )

       console.log('resultado', resultado)
       document.getElementById('resultado')
       .innerHTML = `
       A operacao de ${tipoOperacao}, ${valor1} por ${valor2} e ${resultado}`
    
    }
}