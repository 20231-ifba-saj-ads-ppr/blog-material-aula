package meuExemplo;

public class Client {
    public static void main(String[] args) { 
        HamburguerSimples hamburguerSimples = new HamburguerSimples("Pão, carne, tomate, alface, queijo");
        System.out.println(hamburguerSimples.toString());
        //HamburguerSimples
        //Ingredientes: Pão, carne, tomate, alface, queijo
        
        DecoratorAddIngrediente hamburguerSimplesCheddar = new DecoratorAddIngrediente(hamburguerSimples, "Cheddar");
        System.out.println(hamburguerSimplesCheddar.toString());
        //Pedido com adicional: HamburguerSimples
        //Ingredientes: Pão, carne, tomate, alface, queijo + Cheddar
    }
}
