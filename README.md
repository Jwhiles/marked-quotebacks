# Marked Quotebacks

This library exports an extension for the [markedjs](https://marked.js.org/) that adds support for [Quotebacks](https://quotebacks.net/).

The idea of this package is that you install it into your marked renderer, and then if your markdown files contain anything that matches the format of the quotes exported by quotebacks, then it will be rendered in the same way that we see in the existing marked.

## The format of quotes 
Add a quote like this to your markdown:
```md
> Steven Spielberg's 'The Terminal' is the worst film I've ever watched.

Source: [Fear and Loathing of The Terminal](https://johnwhiles.com/posts/the-terminal) by John Whiles
```

and it will be rendered like this:

## How to use it

```typescript
import { marked } from "marked";
import { quoteBack } from "marked-quotebacks";

marked.use({ extensions: [quoteBack] });

const html = marked(yourMarkdownInput);
```

The library also exports a css file under /dist/main.css which will make the quotebacks look the right way. Depending on how you build your website there are various ways to use the styles. I leave it up to you to work this out. You can also write your own css if you want the quotes to look different.


