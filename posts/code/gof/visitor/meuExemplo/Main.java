package posts.code.gof.visitor.meuExemplo;

public class Main {
    public static void main(String[] args) {
        ProdutoVisitor comida = new Comida(10);
        ProdutoVisitor cigarro = new Cigarro(5);
        ProdutoVisitor bebidaAlcoolica = new BebidaAlcoolica(5);

        TaxaVisitor brasilTaxaVisitor = new BrasilTaxaVisitor();
        TaxaVisitor euaTaxaVisitor = new EuaTaxaVisitor();

        ProdutoVisitor[] produtos = {comida, cigarro, bebidaAlcoolica};
        double total = 0;
        double totalComImpostosBrasil = 0;
        double totalComImpostosEUA = 0;

        for (ProdutoVisitor produto : produtos) {
            total += produto.getPreco();
            totalComImpostosBrasil += produto.getPrecoComTaxa(brasilTaxaVisitor);
            totalComImpostosEUA += produto.getPrecoComTaxa(euaTaxaVisitor);
        }

        System.out.println("Total: " + total);
        System.out.println("Total com impostos no Brasil: " + totalComImpostosBrasil);
        System.out.println("Total com impostos nos EUA: " + totalComImpostosEUA);
    }
}
