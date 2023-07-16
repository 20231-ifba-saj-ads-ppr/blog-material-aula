package meuExemplo;

public class HamburguerSimples extends Pedido{
    private String ingredientes;
    private double valor;

    public HamburguerSimples() {
        this.ingredientes = "Pão, carne, tomate, alface, queijo";
        this.valor = 9.90;
    }

    @Override
    public void preparar() {
        // Lógica do método...
    }

    public String getIngredientes() {
        return ingredientes;
    }

    public void setIngredientes(String ingredientes) {
        this.ingredientes = ingredientes;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    @Override
    public String toString() {
        return "HamburguerSimples\n Ingredientes: " + this.ingredientes + "\n Valor: " + this.valor;
    }
}
