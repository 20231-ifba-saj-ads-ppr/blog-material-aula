package meuExemplo;

public class Produto extends Component {
    private double preco;
    private String nome;
    private String descricao;
    private String id;

    public Produto(String nome, String descricao, String id, double preco) {
        this.nome = nome;
        this.descricao = descricao;
        this.id = id;
        this.preco = preco;
    }

    @Override
    public double getPreco() {
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
    public Component clone() {
        return new Produto(nome, descricao, id, preco);
    }

    @Override
    public String toString() {
        return "Nome: " + nome + " - Preço: " + preco + " - ID: " + id;
    }
}
