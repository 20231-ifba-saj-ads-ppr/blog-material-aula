import java.util.ArrayList;
import java.util.List;

public class FontDialogDirector extends DialogDirector {
    public List<Widget> widgets = new ArrayList<>();

    @Override
    public void showDialog() {
        for (Widget widget : widgets) {
            widget.changed();
        }
    }

    @Override
    public void createWidgets() {
        widgets.add(new ListBox(this));
        widgets.add(new EntryField(this));
    }

    @Override
    public void widgetChanged(Widget widget) {
        if (widget instanceof ListBox) {
            System.out.println("Algum item do ListBox selecionado.");
            //Lógica...
        } else if (widget instanceof EntryField) {
            System.out.println("Algo foi escrito no EntryField.");
            //Lógica...
        }
    }

}
