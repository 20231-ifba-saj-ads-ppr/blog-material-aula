package exemploGof;

public class Decorator extends VisualComponent{
    private VisualComponent objectDecorator;
    
    public Decorator(VisualComponent objectDecorator) {
        this.objectDecorator = objectDecorator;
    }

    @Override
    public void Draw() {
        objectDecorator.Draw();
    }
}
