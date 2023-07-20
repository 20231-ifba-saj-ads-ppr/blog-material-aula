package posts.code.gof.visitor.gofExemplo;

public class VariableRefNode extends Node {

    @Override
    public void Accept(NodeVisitor visitor) {
        visitor.VariableRefNode(this);
    }

    //...
}
