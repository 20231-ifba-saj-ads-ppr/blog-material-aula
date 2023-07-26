package posts.code.gof.visitor.meuExemplo;

public class BebidaAlcoolica extends ProdutoVisitor {

    public BebidaAlcoolica(double preco) {
        super("Bebida Alcoólica", preco);
    }

    @Override
    public double getPrecoComTaxa(TaxaVisitor visitor) {
        return visitor.calculaTaxaBebidaAlcoolica(this);
    }

}
