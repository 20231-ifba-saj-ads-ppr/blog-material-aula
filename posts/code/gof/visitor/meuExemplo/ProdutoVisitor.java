package posts.code.gof.visitor.meuExemplo;

public abstract class ProdutoVisitor {
    protected String nome;
    protected double preco;

    public ProdutoVisitor(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    public String getNome() {
        return nome;
    }

    public double getPreco() {
        return preco;
    }

    public abstract double getPrecoComTaxa(TaxaVisitor visitor);
}

