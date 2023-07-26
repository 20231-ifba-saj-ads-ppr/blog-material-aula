package posts.code.gof.visitor.meuExemplo;

public class Cigarro extends ProdutoVisitor {

    public Cigarro(double preco) {
        super("Cigarro", preco);
    }

    @Override
    public double getPrecoComTaxa(TaxaVisitor visitor) {
        return visitor.calculaTaxaCigarro(this);
    }

}
