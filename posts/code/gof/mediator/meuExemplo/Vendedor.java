

import java.util.ArrayList;
import java.util.List;

public class Vendedor {
    private List<Produto> produtos = new ArrayList<>();
    private Mediador mediador;

    public void visualizarProdutos() {
        for (Produto produto : produtos) {
            System.out.println("ID: " + produto.getId() + "\nNome: " + produto.getNome() + "\nPreço: " + produto.getPreco());
        }
    }

    public void adicionarProduto(Produto produto) {
            this.produtos.add(produto);
    }

    public void setMediador(Mediador mediador) {
        this.mediador = mediador;
    }

    public Produto vender(String id) {
        int indiceProduto = -1;
        for (int i = 0; i < produtos.size(); i++) {
            if (produtos.get(i).getId().equals(id)) {
                indiceProduto = i;
                break;
            }
        }
        if (indiceProduto == -1) {
            return null;
        }
        Produto produto = produtos.remove(indiceProduto);
        return produto;
    }

    public void comprar(String id) {
        mediador.comprar(id);
    }
}

