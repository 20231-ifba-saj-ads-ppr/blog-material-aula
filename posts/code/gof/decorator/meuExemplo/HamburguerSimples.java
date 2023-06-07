package meuExemplo;

public class HamburguerSimples extends Pedido{
    private String ingredientes;

    public HamburguerSimples(String ingredientes) {
        this.ingredientes = ingredientes;
    }

    @Override
    public void preparar() {
        // Lógica do método...
    }

    @Override
    public String toString() {
        return "HamburguerSimples\n Ingredientes: " + ingredientes;
    }
}
