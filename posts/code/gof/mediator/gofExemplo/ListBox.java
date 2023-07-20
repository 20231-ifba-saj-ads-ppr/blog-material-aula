
public class ListBox extends Widget {
    private DialogDirector director;

    public ListBox(DialogDirector director) {
        super(director);
    }

    @Override
    public void changed() {
        director.widgetChanged(this);
    }
    
    public void getSelection() {
        //Lógica para saber qual item da ListBox foi selecionado
    }
}
