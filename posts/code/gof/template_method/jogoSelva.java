public class jogoSelva extends templateJogoTabuleiro {

    float alturaTabuleiro, larguraTabuleiro;
    String regrasSelva;
    int quantidadeJogadores;

@Override
	public float defininirDimensaoTabuleiro(float altura, float largura) {

		this.alturaTabuleiro = altura;
        this.larguraTabuleiro = largura;

        criarTabuleiro(alturaTabuleiro, larguraTabuleiro);

	}

@Override
    public void definirRegras(String regra){
        this.regrasSelva = regra;
    }

@Override
    public void determinarQuantidadeJogadores(int qtdJogador){
        this.quantidadeJogadores = qtdJogador;
    }

@Override
    public void criarPecas(){
        // chamar builder para construção das peças
        // usar prototype para clone de peças
    }
    
}