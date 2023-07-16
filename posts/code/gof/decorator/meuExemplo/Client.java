package meuExemplo;

public class Client {
    public static void main(String[] args) { 
        HamburguerSimples hamburguerSimples = new HamburguerSimples();
        System.out.println(hamburguerSimples.toString());
        //HamburguerSimples
        //Ingredientes: Pão, carne, tomate, alface, queijo
        //Valor: 9.9
        
        DecoratorAddIngrediente hamburguerSimplesCheddar = new DecoratorAddIngrediente(hamburguerSimples, "Cheddar", 1.50);
        System.out.println(hamburguerSimplesCheddar.toString());
        //Pedido com adicional: HamburguerSimples
        //Ingredientes: Pão, carne, tomate, alface, queijo + Cheddar
        //Valor: 11.4
    }
}
