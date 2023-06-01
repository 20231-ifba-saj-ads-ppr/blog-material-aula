package gofExemplo;

public class Leaf extends ComponentGraphic{
    private String nome;

    public Leaf(String nome) {
        this.nome = nome;
    }

    @Override
    public void Draw() { /*Lógica...*/ }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Override
    public String toString() {
        return "Nome: " + nome;
    }
}
