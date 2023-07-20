package posts.code.gof.visitor.gofExemplo;

public class CodeGeneratingVisitor implements NodeVisitor {
    private AssignmentNode aNode;
    private VariableRefNode vNode;

    @Override
    public void VisitAssignment(AssignmentNode node) {
        this.aNode = node;
    }

    @Override
    public void VariableRefNode(VariableRefNode node) {
        this.vNode = node;
    }
     
    //...
}
