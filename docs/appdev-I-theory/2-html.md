
# HTML (HyperText Markup Language)

- **HTML** browser interpretation of **SGML** (Standard Generalized Markup Language) by *Tim Berners-Lee* at CERN (1989-97 HTML 1-4)
	- XML based (1997-2010s) easier to use, relax maths
	- HTML5 2008 → 👑2014 browser-independent OS-independent standard for*Adobe Flash Animation Plugin*
	- forgiving → loose validity checks (not-closed `</tag>`, case insensitive)
	- Display `Removed presentation-only <center><font>`
![](https://i.imgur.com/YDwt3ez.png)


#### Document Object Model
```html
<!DOCTYPE html> // location-specific
<html lang="en">
<head>
<h1>Heading 1</h1>
<a href="link">Link Text</a>
</head>
<body>
<p>para</p>
<div style="font-size: large; text-align: center">
<em><strong>emphasis strong logical semantic form</strong></em><br></br>
<i><b>italic bold physical presentation form</b></i>
</div>
</body>
</html>
 ```

::: info DOM tree
![](https://i.imgur.com/fWBLgwn.png) DOM is tree structure representing logical layout of document `https://www.example.com/path?q=searchquery&key=value`

| html                                                                           | use                                          |
| ------------------------------------------------------------------------------ | -------------------------------------------- |
| `<ul><li>`                                                                     | `<ul><li>` unordered list                      |
| `<ol><li>`                                                                     | `<ol><li>` ordered list                        |
| `<img alt="" src="name.png">`                                                  | image ❌ need `</img>`                       |
| `<table>(<thead><th>)<tr><td>`                                                              | table, row, cell                             |
| `<audio>,<video controls muted><source src="vid.mp4" type="video/mp4"></video>` | autoplay video, muted by default             |
| `<a href="link.html">Link Text</a>`                                            | anchor tag → attr: hyper reference HYPERLINK |
| `<link href="" >`                                 | IMPORT copy paste from ""                                       |
:::

-  `div` element is used for block-level organization & styling of page elements, whereas a `span` element is used for inline organization and styling.
```html
<form action="https://www.google.com/search" method="get">
    <input autocomplete="off" autofocus name="q" placeholder="Query" type="search">
    <input type="submit" value="Google Search">
<!--register email-->
   <input autocomplete="off" autofocus name="q" pattern=".+@ds.study.iitm.ac.in" placeholder="email" type="email">
   <input type="submit" value="Register">
</form>
```
- Application Programming Interfaces (APIs)
	- Canvas (draw arbitary)
	- Offline (install as app, stored on local machine even if ❌ connected to Internet)
	- Web storage (persistent, remember where you left the file)
	- Drag & Drop (drag from OS to website)

## [Regex cheatsheet](https://cheatography.com/davechild/cheat-sheets/regular-expressions/)


## JavaScript or ECMAScript
- programmability inside browser which HTML, CSS can't do (you will learn in [Appdev-2](../appdev-II-theory/index.md))

:::info Check the following links for help:
- Validate syntax error: https://www.validator.w3.org
:::
