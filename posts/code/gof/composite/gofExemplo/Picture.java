package gofExemplo;

import java.util.ArrayList;
import java.util.List;

public class Picture extends Graphic {
    private List<Graphic> children = new ArrayList<>();
    private String nome;

    public Picture(String nome) {
        this.nome = nome;
    }

    @Override
    public void draw() { /*Lógica...*/ }

    @Override
    public void add(Graphic graphic) {
        children.add(graphic);
    }

    @Override
    public void remove(Graphic graphic) {
        children.remove(graphic);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Override
    public String toString() {
        return "Nome: " + nome + " " + children + "";
    }
}
