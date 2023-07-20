public abstract class templateJogoTabuleiro {

    // atributos necessarios

    // metodo que não pode ser sobrescritos pelas subclasses
    public final void construirJogoTabuleiro() {

        defininirDimensaoTabuleiro();
        criarTabuleiro();
        definirRegras();
        criarPecas();
        determinarQuantidadeJogadores();

    }
    private void criarTabuleiro(float alturaTabuleiro, float larguraTabuleiro){
        // chamar o builder para construir o tabuleiro
    } 

    // metodos para serem implementados pelas subclasses
    public abstract void definirRegras();

    public abstract float defininirDimensaoTabuleiro();

    public abstract void criarPecas(){
        // chamar o builder para construir as peças
    }

    public abstract void determinarQuantidadeJogadores();

    
}