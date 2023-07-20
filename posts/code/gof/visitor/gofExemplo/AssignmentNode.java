package posts.code.gof.visitor.gofExemplo;

public class AssignmentNode extends Node {

    @Override
    public void Accept(NodeVisitor visitor) {
        visitor.VisitAssignment(this);
    }
    
    //...
}
