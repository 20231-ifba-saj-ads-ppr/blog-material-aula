package posts.code.gof.visitor.meuExemplo;

public class Comida extends ProdutoVisitor {

    public Comida(double preco) {
        super("Comida", preco);
    }

    @Override
    public double getPrecoComTaxa(TaxaVisitor visitor) {
        return visitor.calculaTaxaComida(this);
    }

}
