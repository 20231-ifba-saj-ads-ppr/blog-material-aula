package gofExemplo;

public class Cliente {
    public static void main(String[] args) {
        Graphic line = new Line("Linha");
        Graphic rectangle = new Rectangle("Retângulo");
        Graphic text = new Text("Texto");

        Graphic picture1 = new Picture("Picture 1");
        picture1.add(line);
        picture1.add(rectangle);
        picture1.add(text);

        System.out.println(picture1);

        Graphic picture2 = new Picture("Picture 2");
        picture2.add(picture1);
        picture2.add(line);
        picture2.add(rectangle);

        System.out.println(picture2);
    }
}
