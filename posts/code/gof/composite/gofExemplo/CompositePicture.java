package gofExemplo;

import java.util.ArrayList;
import java.util.List;

public class CompositePicture extends ComponentGraphic {
    private List<ComponentGraphic> children = new ArrayList<>();
    private String nome;

    public CompositePicture(String nome) {
        this.nome = nome;
    }

    @Override
    public void Draw() { /*Lógica...*/ }

    @Override
    public void add(ComponentGraphic graphic) {
        children.add(graphic);
    }

    @Override
    public void remove(ComponentGraphic graphic) {
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
