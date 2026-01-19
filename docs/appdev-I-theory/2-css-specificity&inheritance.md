
## CSS selectors

:::tabs
==type selector
```css
/* anchor tag on mouse hover will be underline with Inter sans-serif font */
a:hover{
    text-decoration: underline;
    font-family: 'Inter sans-serif';
    margin: 0;}
```
==.class selector
selects HTML elements with a specific `class` attribute.
- Use period (.) + class name

```css
/* reusable <class="centered"> will make it centered align on page*/
.centered{
    text-align: center;
    }

.large{
    font-size: large;
    }
```
==ID selector
The id of an element is unique within a page, so the id selector is used to selects 1 unique HTML element.
- Use hash (#) + id of the element.
```css
#main-header {
    font-size: 2em;
    padding: 30px 20px;
}
/* explain what padding is */
```
==attribute selector
```css
a[title] {
	color: purple;
	} /*all <a> elements with title attr will be purple color*/ 
input[type="button"] {
	border: 1px solid black;
	}/*<input> element with EXACTLY type="button"*/
div[class*="post"] {
	background-color: #333;
	}/*all <div> whose class contains "post" substring background becomes grey
^ starts with       $ ends with EXPLAIN THIS MORE*/ 
```

### How to Add CSS
#### 1. External CSS
Usually used for the common theme of your entire website within 1 file!!
- `<link>` element , inside the `<head>` section of HTML page.
```html
<html>
<head>
<link rel="stylesheet" type="text/css" href="example.css">
</head>
<body>

```

#### 2. Internal CSS
may be used if that HTML page has a unique style, separate or in addition to the external styling.

```html
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
```

#### 3. Inline CSS
May be used to apply unique style for a single element
```html
<div style="font-size: large; text-align: center">IMP TEXT</div>
<td style="border: 1px solid black;">Statistics for Data Science I</td>
```
- If internal style is defined AFTER the link of `external` css (mostly). It will follow `internal`
- If internal style is defined BEFORE  the link of `external` css. It will follow `external`
- `inline` style (with the HTML element) cascades `internal & external` style sheets in the `head` section

<iframe
  src="https://davidbau.com/colors/"
  title="CSS Color Names Visualizer"
  width="100%"
  height="520"
  style="
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
  "
  loading="lazy"
></iframe>


#### `!important` > inline > id > class > element > internal > external css
1. If an element is styled using two different classes, then it will acquire styling from the **latest class in order**.
2. If an element is styled using an ID and a class, then it will acquire styling from the **ID** selector.
3. The `!important` rule is used to give the value of a specific property the highest priority.It will **override ALL previous styling rules** for that specific property on that element!


<CSS-specificity />

::: details Explanation
Text1 → Red (class overrides element)<br>
Text2 → Plum (inline overrides class & id)<br>
Text3 → Grey (ID overrides class)<br>
Text4 → Blue (element selector)<br>
Text5 → Blue (inherits same template)<br>
👉 Think of CSS like template inheritance: each layer builds on the previous one and may override it.
:::

## CSS inheritance
