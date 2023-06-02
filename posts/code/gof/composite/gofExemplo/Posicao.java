package gofExemplo;

public class Posicao {
    private Double pontoX;
    private Double pontoZ;

    public Posicao(Double pontoX, Double pontoZ) {
        this.pontoX = pontoX;
        this.pontoZ = pontoZ;
    }

    //Getters e setters

    @Override
    public String toString() {
        return "(" + pontoX + ", " + pontoZ + ")";
    }    
}
