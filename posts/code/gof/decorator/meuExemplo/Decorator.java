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
}
