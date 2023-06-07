package meuExemplo;

public class DecoratorAddIngrediente extends Decorator {
    private Pedido pedido;
    private String ingrediente;

    public DecoratorAddIngrediente(Pedido copiaPedido, String addIngrediente) {
        this.pedido = copiaPedido;
        this.ingrediente = addIngrediente;
    }

    @Override
    public void preparar() {
        super.preparar();
    }

    @Override
    public String toString() {
        return "Pedido com adicional: " + pedido + " + " + ingrediente;
    }
}
