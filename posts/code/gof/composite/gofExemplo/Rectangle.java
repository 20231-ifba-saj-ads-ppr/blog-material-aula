package gofExemplo;

public class Rectangle extends Graphic{
    private String nome;

    public Rectangle(String nome) {
        this.nome = nome;
    }

    @Override
    public void draw() { /*Lógica...*/ }

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
