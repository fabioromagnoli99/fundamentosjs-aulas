class Jogodamemoria {
    //se madar um obj = { tela: 1, idade: 2, etc: 3}
    // vai ignorar o resto das propriedades e pegar somente a propriedade
    // tela
    constructor({tela}) {
        this.tela = tela
        // caminho do arquivo, sempre relativo
        // ao index.html!
        this.heroisIniciais = [
            {img: './arquivos/batman.png', name: 'batman'},
            {img: './arquivos/ciclop.png', name: 'ciclop'},
            {img: './arquivos/ironman.png', name: 'ironman'},
            {img: './arquivos/mmaravilha.png', name: 'mmaravilha'},
        ]
    }
    // para usar o this, nao podemos usar o static!
    inicializar() {
        // vai pegar todas as funcoes da classe tela!
        // coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)

    }
}