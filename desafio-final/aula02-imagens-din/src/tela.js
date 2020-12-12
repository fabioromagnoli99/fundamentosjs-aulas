const ID_CONTEUDO = "conteudo"
class Tela {
    static obterCodigoHtml(item){
        return`
        <div class="col-md-3">
            <div class="card" style="width: 40%;">
                <img src="${item.img}" name="${item.nome} class="card-img-top" alt="...">
            </div>
            <br />
        </div>
        `
    }

    static alterarConteudoHTML(codigoHTML) {
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHTML


    }

    static gerarStringHTMLPelaImagem(itens) {
        // para cada item da lista, vai executar a funcao obterCodigoHtml
        // ao final, vai concatenar tudo em uma unica string
        // muda de Array para String
        return itens.map(Tela.obterCodigoHtml).join('')
    }
    static atualizarImagens(itens) {
        const codigoHTML = Tela.gerarStringHTMLPelaImagem(itens)
        Tela.alterarConteudoHTML(codigoHTML)
    }


}