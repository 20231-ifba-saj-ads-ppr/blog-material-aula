package posts.code.gof.visitor.meuExemplo;

public class EuaTaxaVisitor implements TaxaVisitor {

    @Override
    public double calculaTaxaComida(Comida comida) {
        return comida.getPreco() + comida.getPreco() * 0.10;
    }

    @Override
    public double calculaTaxaCigarro(Cigarro cigarro) {
        return cigarro.getPreco() + cigarro.getPreco() * 1.50;
    }

    @Override
    public double calculaTaxaBebidaAlcoolica(BebidaAlcoolica bebidaAlcoolica) {
        return bebidaAlcoolica.getPreco() + bebidaAlcoolica.getPreco() * 1.5;
    }
}
