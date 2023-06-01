package gofExemplo;

public class Line extends Graphic{
    private String nome;

    public Line(String nome) {
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
