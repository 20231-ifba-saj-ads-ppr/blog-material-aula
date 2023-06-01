package gofExemplo;

public class Cliente {
    public static void main(String[] args) {
        ComponentGraphic line = new Leaf("Linha");
        ComponentGraphic rectangle = new Leaf("Retângulo");
        ComponentGraphic text = new Leaf("Texto");

        ComponentGraphic picture1 = new CompositePicture("Picture 1");
        picture1.add(line);
        picture1.add(rectangle);
        picture1.add(text);

        System.out.println(picture1);

        ComponentGraphic picture2 = new CompositePicture("Picture 2");
        picture2.add(picture1);
        picture2.add(line);
        picture2.add(rectangle);

        System.out.println(picture2);
    }
}
