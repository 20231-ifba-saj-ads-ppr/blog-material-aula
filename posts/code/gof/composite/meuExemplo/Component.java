package meuExemplo;

public abstract class Component {
    abstract double getPreco();
    abstract String getNome();
    abstract String getDescricao();
    abstract String getId();
    public abstract Component clone();
    
    public void adicionar(Component... produtos) {}
    public void remover(Component... produtos) {}
}
