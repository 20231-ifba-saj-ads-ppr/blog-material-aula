
import java.util.ArrayList;
import java.util.List;

public class Mediador {
    private List<Vendedor> vendedores = new ArrayList<>();

    public void adicionarVendedor(Vendedor... vendedores) {
        for (Vendedor vendedor : vendedores) {
            this.vendedores.add(vendedor);
            vendedor.setMediador(this);
        }
    }

    public Produto comprar(String id) {
        Produto produto;

        for (Vendedor vendedor : vendedores) {
            produto = vendedor.vender(id);

            if (produto != null) {
                System.out.println("--------\nProduto encontrado:\nID: " + produto.getId() + "\nNome: " + produto.getNome() + "\nPreço: " + produto.getPreco() + "\n--------");
                return produto;
            }
        }
        System.out.println("Nenhum produto com este id: " + id);
        return null;
    }

    public void visualizarProdutos() {
        for (Vendedor vendedor : vendedores) {
            vendedor.visualizarProdutos();
        }
    }
}

