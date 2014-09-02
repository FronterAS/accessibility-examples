accessibility-examples
======================

---

A repo showing markup and workarounds for AA accessibility

## Why?

There are many times when using plain old html isn't going to impress anybody, and you need
something a bit funkier. Then you break accessibility. This is where you add your tips and tricks
for such events.

---

## The Rules

The rules are, you can't add anything to this reference app unless you are 100% certain that it
complies with AA at the very minimum.

---

## Markdown friendly contribution

Since we want to make it easy for you to contribute, we are including a markdown parser. Just open
up views/home.html to see how easy it is to include your markdown in the site.

There is a [Fronter fork](https://github.com/FronterAS/angular-markdown-directive) of
[Brian Ford's directive](https://github.com/btford/angular-markdown-directive) in the Fronter github
account to add the extra behaviour we need for this functionality to display html tags correctly in
code snippets.

---

## Known issues
Since the application relies on the display of unrendered html and css code in the browser, we need
to parse the actual html contents of the directive or markdown file. This means that a file starting
with a # (to represent the header tag) will not render that first line correctly. To remedy, add a
newline at the top of the markdown file.
