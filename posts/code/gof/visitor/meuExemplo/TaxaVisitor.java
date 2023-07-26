package posts.code.gof.visitor.meuExemplo;

public interface TaxaVisitor {
    double calculaTaxaComida(Comida comida);
    double calculaTaxaCigarro(Cigarro cigarro);
    double calculaTaxaBebidaAlcoolica(BebidaAlcoolica bebidaAlcoolica);
}
