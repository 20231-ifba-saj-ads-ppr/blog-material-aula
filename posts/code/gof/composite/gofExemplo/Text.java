package gofExemplo;

public class Text extends Graphic{
    private Posicao posicao;

    public Text(Posicao posicao) {
        this.posicao = posicao;
    }

    @Override
    public void draw() { /*Lógica...*/ }

    //Getters e setters

    @Override
    public String toString() {
        return "Text: " + posicao;
    }    
}
