// metodos estaticos nao podem acessar o 'this'
// por isso, nao vamos colocar o util no construtor
const util = Util

const ID_CONTEUDO = "conteudo"
const ID_BTN_JOGAR = "jogar"
const ID_MENSAGEM = "mensagem"
const CLASSE_INVISIVEL = "invisible"
const ID_CARREGANDO = "carregando"
const ID_CONTADOR = "contador"
const ID_BTN_MOSTRAR_TUDO = "mostrarTudo"
const MENSAGENS = {
    sucesso: {
        texto: 'Combinacao correta',
        classe: 'alert-success'
    },
    erro : {
        texto: 'Combinacao incorreta',
        classe: 'alert-danger'
    }
}

class Tela {
    static obterCodigoHtml(item){
        return`
        <div class="col-md-3">
            <div class="card" style="width: 50%;" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
                <img src="${item.img}" name="${item.nome}"class="card-img-top" alt="...">
            </div>
            <br />
        </div>
        `
    }

    static configurarBotaoverificarSelecao(funcaoOnclick) {
        window.verificarSelecao = funcaoOnclick
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

    static configurarBotaoJogar(funcaoOnclick) {
        const btnJogar = document.getElementById(ID_BTN_JOGAR)
        btnJogar.onclick = funcaoOnclick

    }

    static exibirHerois(nomedoHeroi, img) {
        const elementosHtml = document.getElementsByName(nomedoHeroi)
        // para cada elemento encontrado na tela, vamos alterar a imagem       
        // para a imagem inical dele
        // com o forEach, para cada item, dentro dos () setamos o valor de imagem
        elementosHtml.forEach(item =>(item.src = img))
    }

    static async exibirMensagem(sucesso = true) {
        const elemento = document.getElementById(ID_MENSAGEM)
        if(sucesso) {
            elemento.classList.remove(MENSAGENS.erro.classe)
            elemento.classList.add(MENSAGENS.sucesso.classe)
            elemento.innerHTML = MENSAGENS.sucesso.texto
        }
        else {
            elemento.classList.remove(MENSAGENS.sucesso.classe)
            elemento.classList.add(MENSAGENS.erro.classe)
            elemento.innerHTML = MENSAGENS.erro.texto
        }
        elemento.classList.remove(CLASSE_INVISIVEL)
        await util.timeout(1000)
        elemento.classList.add(CLASSE_INVISIVEL)
    }

    static exibirCarregando(mostrar = true) {
        const carregando = document.getElementById(ID_CARREGANDO)
        if(mostrar) {
            carregando.classList.remove(CLASSE_INVISIVEL)
            return;
        }
        carregando.classList.add(CLASSE_INVISIVEL)

    }

    static iniciarContador(){
        let contarAte = 3
        const elementoContador = document.getElementById(ID_CONTADOR)
        //vamos substituir o texto comecando $$contador segundos
        // onde esta o $$contador adicinaremos o valor
        const indentificadorNoTexto = "$$contador"
        const textoPadrao = `Comencando em ${indentificadorNoTexto} segundos...`
        // vamos criar uma funcao em linha para atualizar o texto
        // a cada segundo
        const atualizarTexto = () =>
        (elementoContador.innerHTML = textoPadrao.replace(indentificadorNoTexto, contarAte--))

        atualizarTexto()
        // a cada segundo, vai chamar a funcao atualizar texto
        // essa funcao vai substituir o $$ contador pelo `contarAte` diminuindo o valor
        // retornamos o idDoIntervalo para parar de mais tarde
        const idDoIntervalo = setInterval(atualizarTexto, 1000)
        return idDoIntervalo
    }
    
    static limparContador(idDoIntervalo) {
        clearInterval(idDoIntervalo)
        document.getElementById(ID_CONTADOR).innerHTML = ""
    }
    static configurarBotaoMostrarTudo(funcaoOnclick){
        const btnMostrarTudo = document.getElementById(ID_BTN_MOSTRAR_TUDO)
        btnMostrarTudo.onclick = funcaoOnclick
        
    }
}