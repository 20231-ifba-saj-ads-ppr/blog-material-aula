package exemploGof;

public class ScrollDecorator extends Decorator{
    ScrollPosition scrollPosition;
    // Atributos...

    public ScrollDecorator(VisualComponent objectDecorator) {
        super(objectDecorator);
    }

    // Getters e setters...

    @Override
    public void Draw() {
        super.Draw();
    }

    public void Scrollto() {
        // Lógica do método...
    }
}
