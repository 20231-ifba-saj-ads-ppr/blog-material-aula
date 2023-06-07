package exemploGof;

public class Client {
    public static void main(String[] args) { 
        TextView text = new TextView(); // Instanciando o TextView

        ScrollDecorator textScroll = new ScrollDecorator(text); 
        // Instanciando um ScrollDecorator que vai copiar o text para adicionar o scroll
        BorderDecorator textBorder = new BorderDecorator(text); 
        // Instanciando um BorderDecorator que vai copiar o text para adicionar a borda
        BorderDecorator textScrollBorder = new BorderDecorator(textScroll); 
        // Instanciando um BorderDecorator que vai copiar o textScroll e adicionar uma borda
    }
}
