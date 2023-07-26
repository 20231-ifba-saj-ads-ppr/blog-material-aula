
public class EntryField extends Widget {
    private DialogDirector director;

    public EntryField(DialogDirector director) {
        super(director);
    }

    @Override
    public void changed() {
        director.widgetChanged(this);
    }

    public void setText() {
        //Lógica para salvar o texto que foi escrito no EntryField
    }
    
}

