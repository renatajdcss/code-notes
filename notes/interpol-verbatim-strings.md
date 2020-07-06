---
title: Interpolated and Verbatim strings in C#
tags:
  - C#
emoji: 🟣
link: https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.unescape?view=netcore-3.1
---

## The $ special character identifies a string literal as an interpolated string.

From <https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated>  

```C#
Console.WriteLine($"Hello, {name}! Today is {date.DayOfWeek}, it's {date:HH:mm} now.");
```

## The @ special character serves as a verbatim identifier.

From <https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/verbatim> 

## To enable C# keywords to be used as identifiers. 
  
  ```C#
 string[] @for = { "John", "James", "Joan", "Jamie" };
 for (int ctr = 0; ctr < @for.Length; ctr++)
 {
   Console.WriteLine($"Here is your gift, {@for[ctr]}!");
 }
```

### To indicate that a string literal is to be interpreted verbatim

```C#
 string filename1 = @"c:\documents\files\u0066.txt";
 string filename2 = "c:\\documents\\files\\u0066.txt";
````
