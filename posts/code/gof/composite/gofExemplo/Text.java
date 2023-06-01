package gofExemplo;

public class Text extends Graphic{
    private String nome;

    public Text(String nome) {
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
