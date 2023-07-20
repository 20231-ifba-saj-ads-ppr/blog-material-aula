package posts.code.gof.visitor.gofExemplo;

public interface NodeVisitor {
    public void VisitAssignment(AssignmentNode node);
    public void VariableRefNode(VariableRefNode node);
}
