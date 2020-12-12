function onLoad() {
    const dependecias = {
        tela: Tela // a classe Tela e global
    }
    //inicializamos o jogo da memoria
    const jogodamemoria = new Jogodamemoria(dependecias)
    jogodamemoria.inicializar()

}
window.onload = onLoad