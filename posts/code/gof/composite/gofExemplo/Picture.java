package gofExemplo;

import java.util.ArrayList;
import java.util.List;

public class Picture extends Graphic {
    private List<Graphic> children = new ArrayList<>();
    private Posicao posicao;

    public Picture(Posicao posicao) {
        this.posicao = posicao;
    }

    @Override
    public void draw() { /*Lógica...*/ }

    public void add(Graphic graphic) {
        children.add(graphic);
    }

    public void remove(Graphic graphic) {
        children.remove(graphic);
    }

    //Getters e setters

    @Override
    public String toString() {
        return "Picture " + posicao + " " + children + "";
    }
}
