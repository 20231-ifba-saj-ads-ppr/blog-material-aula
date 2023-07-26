
import java.util.List;
public abstract class DialogDirector {
    public List<Widget> widgets;
    public abstract void createWidgets();
    public abstract void widgetChanged(Widget widget);
}
