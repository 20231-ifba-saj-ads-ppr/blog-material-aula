

public class Cliente {
    public static void main(String[] args) {
        Mediador mediador = new Mediador();

        Vendedor vendedor1 = new Vendedor();
        vendedor1.adicionarProduto(new Produto("1", "Celular", 1199.00));
        vendedor1.adicionarProduto(new Produto("2", "Tablet", 2199.00));
        vendedor1.adicionarProduto(new Produto("3", "Notebook", 3199.00));

        Vendedor vendedor2 = new Vendedor();
        vendedor2.adicionarProduto(new Produto("4", "Livro", 70.00));
        vendedor2.adicionarProduto(new Produto("5", "Caderno", 39.00));
        vendedor2.adicionarProduto(new Produto("6", "Caneta", 2.00));

        mediador.adicionarVendedor(vendedor1, vendedor2);

        Comprador comprador1 = new Comprador(mediador);
        mediador.visualizarProdutos();
        /*ID: 1
        Nome: Celular
        Preço: 1199.0
        ID: 2
        Nome: Tablet
        Preço: 2199.0
        ID: 3
        Nome: Notebook
        Preço: 3199.0
        ID: 4
        Nome: Livro
        Preço: 70.0
        ID: 5
        Nome: Caderno
        Preço: 39.0
        ID: 6
        Nome: Caneta
        Preço: 2.0 
        */
        comprador1.comprar("1");
        /*
         --------
        Produto encontrado:
        ID: 1
        Nome: Celular
        Preço: 1199.0
        --------
        */
        comprador1.comprar("6");
        /*
        --------
        Produto encontrado:
        ID: 6
        Nome: Caneta
        Preço: 2.0
        --------
        */
        mediador.visualizarProdutos();
        /*
        ID: 2
        Nome: Tablet
        Preço: 2199.0
        ID: 3
        Nome: Notebook
        Preço: 3199.0
        ID: 4
        Nome: Livro
        Preço: 70.0
        ID: 5
        Nome: Caderno
        Preço: 39.0
        */
        vendedor1.setMediador(mediador);
        vendedor1.comprar("2");
        /*
        --------
        Produto encontrado:
        ID: 2
        Nome: Tablet
        Preço: 2199.0
        --------
        */
        mediador.visualizarProdutos();
        /*
        ID: 3
        Nome: Notebook
        Preço: 3199.0
        ID: 4
        Nome: Livro
        Preço: 70.0
        ID: 5
        Nome: Caderno
        Preço: 39.0
        */
    }
}
