---
tags:
  - MAD1
  - W3
date: 2025-04-24 14:25
syllabus: 
---

- ✅✅ [Builtin-filter](https://jinja.palletsprojects.com/en/stable/templates/#list-of-builtin-filters)


### [Usability Heuristics ](https://www.nngroup.com/articles/ten-usability-heuristics/)


1. **Visibility of System Status:** Always keep users informed about what is happening through timely & clear feedback.
2. **Match Between System & the Real World:** Use language, concepts, & conventions familiar to users; avoid jargon & follow real-world logic.
3. **User Control & Freedom:** Provide easy ways for users to undo or exit unwanted actions, giving them a sense of control.
4. **Consistency & Standards:** Follow platform & industry conventions so users don’t have to wonder if different words or actions mean the same thing.
5. **Error Prevention:** Design to prevent errors before they occur, rather than just relying on good error messages.
6. **Recognition Rather Than Recall:** Minimize memory load by making options, actions, & information visible & easily accessible.
7. **Flexibility & Efficiency of Use:** Allow both novices & experts to use the system efficiently, offering shortcuts & customization for frequent users.
8. **Aesthetic & Minimalist Design:** Keep interfaces simple & uncluttered, showing only relevant information & elements.
9. **Help Users Recognize, Diagnose, & Recover from Errors:** Use plain language in error messages, clearly indicate problems, & suggest solutions.
10. **Help & Documentation:** Provide easy-to-search, concise help & documentation focused on user tasks, available when needed.

#### PyHTML
```python
import pyhtml as h
t = h.html(
	h.head(
		h.title('Test Page')
	), 
	h.body(
		h.h1('This is a title'),
		h.div('This is some text'),
		h.div(h.h2('inside title'), h.p('some text in a paragraph.'))
		)
	)
)
print(t.render())

def f_table(ctx):
	return (tr(
	td(cell) for cell in row
	) for row in ctx['table'])
```

#### jinja template
```python
from jinja2 import Template

t = Template('$name is the $job of $company')
s = t.substitute(name='Tim Cook', 
job='CEO', company='Apple Inc.')
print(s)
t = Template('Hello {{ something }}') #{{ variable }}
print(t.render(something='World'))

t = Template('My favorite numbers: {% for n in range(1,10) %}{{n}}''{% endfor %}')
print(t.render())
```

### Accessibility
<div class="card-grid">

  <div class="card">
    <h3>Perceivable</h3>
    <ul>
      <li>
        Non-text & multimedia content must have 
        <span class="hl">Alt text</span> or captions
      </li>
      <li>
        Content can be presented in different ways without
        <span class="hl">losing meaning</span>
      </li>
      <li>
        Easier to <strong>see & hear</strong> content using 
        <span class="hl">assistive technologies</span> (screen readers, speech browsers)
      </li>
    </ul>
  </div>

  <div class="card">
    <h3>Operable</h3>
    <ul>
      <li>
        All features usable using a 
        <span class="hl">keyboard</span>
      </li>
      <li>
        Users get <strong>enough time</strong> to read and interact
      </li>
      <li>
        Content must not cause 
        <span class="hl">seizures</span> or physical reactions
      </li>
      <li>
        Helps users <span class="hl">navigate</span> and find content easily
      </li>
    </ul>
  </div>

  <div class="card">
    <h3>Understandable</h3>
    <ul>
      <li>
        Text should be 
        <span class="hl">readable and simple</span>
      </li>
      <li>
        Pages behave in 
        <span class="hl">predictable</span> ways
      </li>
      <li>
        Helps users avoid mistakes and 
        <span class="hl">fix errors</span>
      </li>
    </ul>
  </div>

  <div class="card">
    <h3>Robust</h3>
    <ul>
      <li>
        Works with <span class="hl">current and future</span> tools
      </li>
      <li>
        Compatible with different browsers and assistive technologies
      </li>
    </ul>
  </div>

</div>


[Inspect Developer Tools](https://youtu.be/Pf2z_Ue73qE?si=XAul5yx0EI6pAZWH) 
`console.table(array)`
