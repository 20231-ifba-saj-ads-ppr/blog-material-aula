
public class Comprador extends Usuario {
    private Mediador mediador;

    public void setMediador(Mediador mediador) {
        this.mediador = mediador;
    }

    public void visualizarProdutos() {
        this.mediador.visualizarProdutos();
    }

    public void comprar(String id) {
        this.mediador.comprar(id);
    }
}

