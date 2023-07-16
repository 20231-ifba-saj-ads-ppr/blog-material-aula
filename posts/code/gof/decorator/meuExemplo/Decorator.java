package meuExemplo;

public class Decorator extends Pedido{
    private Pedido pedidoDecorator;
    
    public void baseDecorator(Pedido copiaPedido) {
        this.pedidoDecorator = copiaPedido;
    }

    @Override
    public void preparar() {
        // Lógica do método...
    }

    @Override
    public String getIngredientes() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getIngredientes'");
    }

    @Override
    public double getValor() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getValor'");
    }
}
