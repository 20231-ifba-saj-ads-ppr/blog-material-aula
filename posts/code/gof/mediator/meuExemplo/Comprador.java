

public class Comprador {
    private Mediador mediador;

    public Comprador(Mediador mediator) {
        this.mediador = mediator;
    }

    public void visualizarProdutos() {
        this.mediador.visualizarProdutos();
    }

    public void comprar(String id) {
        this.mediador.comprar(id);
    }
}

