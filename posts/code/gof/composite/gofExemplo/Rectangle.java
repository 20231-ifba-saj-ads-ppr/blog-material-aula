package gofExemplo;

public class Rectangle extends Graphic{
    private Posicao posicao;

    public Rectangle(Posicao posicao) {
        this.posicao = posicao;
    }

    @Override
    public void draw() { /*Lógica...*/ }

    //Getters e setters

    @Override
    public String toString() {
        return "Nome: " + posicao;
    }
}
