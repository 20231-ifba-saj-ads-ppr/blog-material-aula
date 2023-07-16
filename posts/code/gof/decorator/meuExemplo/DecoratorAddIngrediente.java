package meuExemplo;

public class DecoratorAddIngrediente extends Decorator {
    private Pedido pedido;
    private String ingrediente;
    private double valor;

    public DecoratorAddIngrediente(Pedido copiaPedido, String addIngrediente, double addValor) {
        this.pedido = copiaPedido;
        this.ingrediente = addIngrediente;
        valor = pedido.getValor();
        valor += addValor;
    }

    @Override
    public void preparar() {
        super.preparar();
    }

    public String getIngrediente() {
        return ingrediente;
    }

    public void setIngrediente(String ingrediente) {
        this.ingrediente = ingrediente;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    @Override
    public String toString() {
        return "Pedido com adicional: " + pedido.getIngredientes() + " + " + ingrediente + "\nValor: " + valor;
    }
}
