package meuExemplo;

public abstract class Pedido {
    abstract public void preparar();
    abstract public String getIngredientes();
    abstract public double getValor();
}
