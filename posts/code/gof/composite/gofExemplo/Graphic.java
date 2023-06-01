package gofExemplo;
public abstract class Graphic {
    abstract void draw();
    public void add(Graphic graphic) {};
    public void remove(Graphic graphic) {};
    public void getChild(int index) {};
}
