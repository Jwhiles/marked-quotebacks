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

<img width="660" alt="Screenshot 2023-02-13 at 18 59 46" src="https://user-images.githubusercontent.com/20307225/218536846-6aa66eab-cc3a-4e2f-8e53-f1c9a2f8d646.png">

## How to use it
```
npm i marked-quotebacks
```

```typescript
import { marked } from "marked";
import { quoteBack } from "marked-quotebacks";

marked.use({ extensions: [quoteBack] });

const html = marked(yourMarkdownInput);
```

The library also exports a css file under /dist/main.css which will make the quotebacks look the right way. Depending on how you build your website there are various ways to use the styles. I leave it up to you to work this out. You can also write your own css if you want the quotes to look different.


## Notes / Known Issues

* I wrote the regex that powers this by hand. It's probably wrong in lots of edge cases. 
* I've tried to use the same google favicon resizer API as the original quotebacks library, but it always returns 404s. I think I must be doing something wrong but I don't know what!
