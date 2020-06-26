---
title: NewtonSoft JSON (Json.NET) Usage
tags:
- C#
- JSON
emoji: 🚀
link: https://www.newtonsoft.com/json/help/html/Introduction.htm
---

# Rename JSON properties
```C#
public class Videogame
{
    [JsonProperty("name")]
    public string Name { get; set; }

    [JsonProperty("release_date")]
    public DateTime ReleaseDate { get; set; }
}
```
## Usage 
```C#
Videogame starcraft = new Videogame
{
    Name = "Starcraft",
    ReleaseDate = new DateTime(1998, 1, 1)
};
string json = JsonConvert.SerializeObject(starcraft, Formatting.Indented);
```

From <https://www.newtonsoft.com/json/help/html/JsonPropertyName.htm> 

# Serialize JSON to a file

```C#
Movie movie = new Movie
{
    Name = "Bad Boys",
    Year = 1995
};
// serialize JSON to a string and then write string to a file
File.WriteAllText(@"c:\movie.json", JsonConvert.SerializeObject(movie));
// serialize JSON directly to a file
using (StreamWriter file = File.CreateText(@"c:\movie.json"))
{
    JsonSerializer serializer = new JsonSerializer();
    serializer.Serialize(file, movie);
}
```

From <https://www.newtonsoft.com/json/help/html/SerializeWithJsonSerializerToFile.htm> 

# Ignore null values

```C#
string jsonIgnoreNullValues = JsonConvert.SerializeObject(person, Formatting.Indented, new JsonSerializerSettings
{
    NullValueHandling = NullValueHandling.Ignore
});
```
From <https://www.newtonsoft.com/json/help/html/NullValueHandlingIgnore.htm> 