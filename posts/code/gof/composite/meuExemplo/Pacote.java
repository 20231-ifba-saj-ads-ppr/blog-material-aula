package meuExemplo;

import java.util.ArrayList;
import java.util.List;

public class Pacote extends Component {
    private List<Component> children = new ArrayList<>();
    private double preco;
    private String nome;
    private String descricao;
    private String id;

    public Pacote(String nome, String descricao, String id) {
        this.nome = nome;
        this.descricao = descricao;
        this.id = id;
    }

    public double getPreco() {
        for (Component child : children) {
            preco += child.getPreco();
        }
        return preco;
    }

    @Override
    public String getNome() {
        return nome;
    }
    
    @Override
    public String getDescricao() {
        return descricao;
    }

    @Override
    public String getId() {
        return id;
    }

    @Override
    public void adicionar(Component... produtos) {
        for (Component produto : produtos) {
            children.add(produto);
        }
    }

    @Override
    public void remover(Component... produtos) {
        for (Component produto : produtos) {
            children.remove(produto);
        }
    }

    public List<String> getNomes() {
        List<String> nomesProdutos = new ArrayList<>();
        for (Component child : children) {
            nomesProdutos.add(child.getNome());
        }
        return nomesProdutos;
    }

    public List<String> getDescricoes() {
        List<String> descricoes = new ArrayList<>();
        for (Component child : children) {
            descricoes.add(child.getDescricao());
        }
        return descricoes;
    }

    public List<String> getIds() {
        List<String> ids = new ArrayList<>();
        for (Component child : children) {
            ids.add(child.getId());
        }
        return ids;
    }

    @Override
    public Component clone() {
        Component clone = new Pacote(nome, descricao, id);
        children.forEach(
            child -> {
                clone.adicionar(child.clone());
            }
        );
        return clone();
    }

    @Override
    public String toString() {
        return "Nome: " + nome + " " + children + " - ID: " + id;
    }
}
