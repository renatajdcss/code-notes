---
title: WPF combobox bindings track change on item inside Observable Collection
tags:
  - WPF
  - MVVM
  - C#
emoji: 💡
link: https://social.msdn.microsoft.com/Forums/vstudio/en-US/610d172d-32d5-4ba4-ba1a-c2b8fea5856f/how-to-refresh-combobox?forum=wpf
---

## Combobox Items Notes

* To enable property change notification, each item inside the ObservableCollection should implement INotifyPropertyChanged interface.
* Use DataTemplate instead of toString to show each item so we can have a binding for them

### Sample XAML

```xml
                  Width="300" Height="30" Margin="16">
                    <ComboBox.ItemTemplate>
                        <DataTemplate>
                            <StackPanel Orientation="Horizontal">
                                <TextBlock Text="{Binding Alias, UpdateSourceTrigger=PropertyChanged}" />
                                <TextBlock Text=" - "/>
                                <TextBlock Text="{Binding DeviceName, UpdateSourceTrigger=PropertyChanged}" />
                                <TextBlock Text=" [" />
                                <TextBlock Text="{Binding CurrentState, UpdateSourceTrigger=PropertyChanged}"
                                           Foreground="{Binding CurrentState,
                                                        Converter={StaticResource StateToColourConverter}}"/>
                                <TextBlock Text="]" />
                            </StackPanel>
                        </DataTemplate>
                    </ComboBox.ItemTemplate>
```

### Sample property inside model:

```C#
    public class KasaaDevice : INotifyPropertyChanged
    {

        public event PropertyChangedEventHandler PropertyChanged;

        private void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }

        private DeviceState _currentState;
        public DeviceState CurrentState {
            get
            {
                return _currentState;
            } set
            {
                _currentState = value;
                OnPropertyChanged(nameof(CurrentState));
            }
        }

        ...

```
