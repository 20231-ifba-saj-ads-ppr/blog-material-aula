package gofExemplo;
public abstract class ComponentGraphic {
    abstract void Draw();
    public void add(ComponentGraphic graphic) {};
    public void remove(ComponentGraphic graphic) {};
    public void getChild(int index) {};
}
