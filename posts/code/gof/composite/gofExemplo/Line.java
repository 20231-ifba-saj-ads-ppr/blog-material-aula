package gofExemplo;

public class Line extends Graphic{
    private Posicao posicao;

    public Line(Posicao posicao) {
        this.posicao = posicao;
    }

    @Override
    public void draw() { /*Lógica...*/ }

    //Getters e setters

    @Override
    public String toString() {
        return "Line " + posicao;
    }
}
