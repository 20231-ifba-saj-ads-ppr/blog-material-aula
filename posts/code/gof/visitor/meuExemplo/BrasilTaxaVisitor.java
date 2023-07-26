package posts.code.gof.visitor.meuExemplo;

public class BrasilTaxaVisitor implements TaxaVisitor {

    @Override
    public double calculaTaxaComida(Comida comida) {
        return comida.getPreco() + comida.getPreco() * 0.25;
    }

    @Override
    public double calculaTaxaCigarro(Cigarro cigarro) {
        return cigarro.getPreco() + cigarro.getPreco() * 0.50;
    }

    @Override
    public double calculaTaxaBebidaAlcoolica(BebidaAlcoolica bebidaAlcoolica) {
        return bebidaAlcoolica.getPreco() + bebidaAlcoolica.getPreco() * 1;
    }
}
