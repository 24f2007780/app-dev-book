
# Representing Text 
::: tip Representing Text on computers
Computers only work with **bits** $0/1$. So we need some Standard “encoding” i.e. some sequence of bits interpreted as a character
:::


## Binary-Decimal

##### Hexadecimal = 16 prime factorisation
- Electronics: ON state 1 & OFF state 0 so less circuitry to design devices *0/significant voltage*
- Computer work by logical decisions YES 1 or NO 0

- $n$ bits $2^n$ possible values (0 to $2^n -1$) in binary combinations
- 6 = $0\times2^0 + 1 \times 2^1 + 1\times {2}^2 + 0 \times 2^3$ `0110` binary

| Integer part:<br>1. `x/2` → note remainder + divide quotient until 0<br>2. Place the remainder values from **bottom to top** most to least-significant bit<br>Fractional part:<br>3. `*2` → note down the integer part of the result +  fractional part of the result `*2` until 0 or a desired level of precision<br>4. Write the integer parts from **top to bottom** to get the binary number.<br> | Integer Part:<br>1. Write bits of binary as $2^x$<br>2. Multiply bits with $x$ corresponding power<br>3. add each term<br>Fractional part:<br>powers of 2 are -negative from `-1`     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |

<Binary-Decimal />

### [ASCII](https://blog.gcwizard.net/wp-content/uploads/2021/01/ASCII-code.png)
American Standard Code for **Information Interchange**: between Machines or humans → Standard **encoding** (seq of bits = specific character) is a character encoding standard that assigns a unique numerical value to each character. 
`7-bits: 128`$2^7$ diff entities
$\underbrace{0...9}_{48 -57}+\underbrace{A...Z}_{65 -90}+ \underbrace{a...z}_{97-122}$+0...9+!@# %&*() -Ľätīń/Rõman → $2^8 =256$
- `"A"` is uniquely in binary =`01000001`=$2^6+2^0=64+1=65$ 
- `'a'=01100001`=$2^6+ 2^5 + 2^0= 64+32+1=97$
UPPER[2]=1, LOWER[2]=0
![](https://dotnettutorials.net/wp-content/uploads/2022/08/word-image-29702-1.png)
## Unicode
`UCS Universal Chracter Set`**Codepoints** for more scripts, characters. after 127 ASCII
- `UCS 2-bytes/char` $2^{16}=65,536$
- `UCS 4-byte/char` $2^{32}=\underset{\text{billion}}{\underset{\downarrow}{4}},294,967,296$
 Optimal coding 
- All ASCII documents are automatically UTF-8 compatible 
- 1st check prefix → linked list through chain of prefixes possible


- UCS4 $32\times5k=1.6Lakh$
- ASCII $8/7/6\times 5k=40k/35k/40k$ 
- frequency of occurrence (e,t,a,o) Huffmann $10-20k$ 
- `zip` compression independent of data, ~ algo
- `1 byte 10xxxx`→  common prefix code (represents value or look at next)

|     | 1st Byte | 2nd Byte | 3rd Byte | 4th Byte | Maximum Expressible Unicode Value |
| --- | -------- | -------- | -------- | -------- | --------------------------------- |
| Unicode Transformation Format | 0xxxxxxx |          |          |          | 007F hex ($2^7=127$)              |
| Eng UTF-8 (ASCII compatible) | 110xxxxx | 10xxxxxx |          |          | 07FF hex ($2^{11}=2047$)          |
|latin/other UTF-16 bits | 1110xxxx | 10xxxxxx | 10xxxxxx |          | FFFF hex ($2^{16}=65535$)         |
| UTF-32/UCS-4 | 11110xxx | 10xxxxxx | 10xxxxxx | 10xxxxx  | 10FFFF hex ($2^{21}=1,114,111$)   |

- Huffman optimal coding based on frequency of occurrence
- using 1 byte for most common alphabets
- group others, have "prefix" code
<iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/MijmeoH9LT4"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen>
</iframe>

# Markup

:::tip Markup
a way of using cues/codes in regular flow of text to make *clear, easy to understand* display of text
 1. <span style="font-weight:bold; color:rgb(98, 151, 208)">Presentational</span>  embed codes not part of regular text, *specific to the editor*❌semantic meaning but ✅WYSIWYG direct edit *MS Word, Google Docs*
2. <span style="font-weight:bold; color:rgb(98, 151, 208)">Procedural</span> → 1️⃣ change font → large, bold 2️⃣ indent 2 lines
3.  <span style="font-weight:bold; color:rgb(98, 151, 208)">Descriptive</span> `<title> with <heading> within 2 <paragraph>s` *Latex, HTML* ✅meaning but ❌ WYSIWYG write/edit
:::

