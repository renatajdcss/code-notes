---
title: WPF Value Converters for UI use
tags:
- WPF
- XAML
- C#
emoji: 🔌
link: 
---

# Using Value Converters

```xml
    <Window.Resources>
        <BooleanToVisibilityConverter x:Key="BooleanToVisibilityConverter"/>
        <!-- Custom Converters -->
        <viewModel:NullToVisibilityConverter x:Key="NullToVisibilityConverter"/>
        <viewModel:EnumToBoolConveter x:Key="EnumToBoolConveter"/>
        <viewModel:StateToColourConverter x:Key="StateToColourConverter" />
    </Window.Resources>
```

# Custom Converters
* Inherit from IValueConverter and implement convert methods

## Samples
* NullToVisibility
```C#
    public sealed class NullToVisibilityConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            return value == null ? Visibility.Collapsed : Visibility.Visible;
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
```

* EnumToBoolean ([Source](https://www.codecisions.com/wpf-binding-boolean-to-an-enum-value/))
```C#
    public sealed class EnumToBoolConveter : IValueConverter
    {
        public object Convert(object value, Type targetType, object boolValue, CultureInfo culture)
        {
            if (value != null && value.GetType().IsEnum)
                return (Enum.Equals(value, boolValue));
            else
                return DependencyProperty.UnsetValue;
        }

        public object ConvertBack(object value, Type targetType, object boolValue, CultureInfo culture)
        {
            if (value is bool && (bool)value)
                return boolValue;
            else
                return DependencyProperty.UnsetValue;
        }
    }
```

* Enum to Color ([Source](https://code.4noobz.net/c-enum-color-converter-ivalueconverter/))
```C#
   public sealed class StateToColourConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            if(value is DeviceState && value != null)
            {
                DeviceState state = (DeviceState)value;
                var color = new SolidColorBrush(Colors.White);

                switch (state)
                {
                    case DeviceState.OFF:
                        colour = new SolidColorBrush(Colors.Red);
                        break;
                    case DeviceState.ON:
                        colour = new SolidColorBrush(Colors.Teal);
                        break;
                    default:
                        colour = new SolidColorBrush(Colors.White);
                        break;
                }
                return color;
            }
            return Binding.DoNothing;
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotSupportedException();
        }
    }
```
XAML:
```xml
    <Window.Resources>
...
        <viewModel:StateToColourConverter x:Key="StateToColourConverter" />
    </Window.Resources>
...

                        <DataTemplate>
                            <StackPanel Orientation="Horizontal">
                               ...
                                <TextBlock Text=" [" />
                                <TextBlock Text="{Binding CurrentState, UpdateSourceTrigger=PropertyChanged}"
                                           Foreground="{Binding CurrentState,
                                                        Converter={StaticResource StateToColourConverter}}"/>
                                <TextBlock Text="]" />
                            </StackPanel>
                        </DataTemplate>
...
```