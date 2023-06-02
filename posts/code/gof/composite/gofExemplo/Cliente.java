package gofExemplo;

public class Cliente {
    public static void main(String[] args) {
        Graphic line = new Line(new Posicao(1.0, 2.0));
        Graphic rectangle = new Rectangle(new Posicao(0.5, 1.8));
        Graphic text = new Text(new Posicao(0.0, 1.2));

        Graphic picture1 = new Picture(new Posicao(3.0, 4.2));
        picture1.add(line);
        picture1.add(rectangle);
        picture1.add(text);

        System.out.println(picture1);
        //Picture (3.0, 4.2) [Line (1.0, 2.0), Nome: (0.5, 1.8), Text: (0.0, 1.2)]
        
        Graphic picture2 = new Picture(new Posicao(4.0, 5.2));
        picture2.add(picture1);
        picture2.add(line);
        picture2.add(rectangle);

        System.out.println(picture2);
        //Picture (4.0, 5.2) [Picture (3.0, 4.2) [Line (1.0, 2.0), Nome: (0.5, 1.8), Text: (0.0, 1.2)], Line (1.0, 2.0), Nome: (0.5, 1.8)
    }
}
