---
title: Deserialize Unscaped JSON String
tags:
  - JSON
  - C#
emoji: 👋
link: https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex.unescape?view=netcore-3.1
---
Pass the JSON string into Regex.Unescape() method.

```C#
JsonConvert.DeserializeObject<ResponseData>(Regex.Unescape(responseData));
```