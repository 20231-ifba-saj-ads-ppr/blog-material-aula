package exemploGof;

public class BorderDecorator extends Decorator{
    private double borderWidth;
    // Atributos

    public BorderDecorator(VisualComponent objectDecorator) {
        super(objectDecorator);
    }
    
    // Getters e Setters...

    @Override
    public void Draw() {
        super.Draw();
    }

    public void Scrollto() {
        // Lógica do método...
    }
}

