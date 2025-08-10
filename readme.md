# `log-it-colored`

Miniature ready-to-use console logger that just writes in a given color

GitHub Repository: [github.com/mirasayon/log-it-colored](https://github.com/mirasayon/log-it-colored/)

NPM package url: [www.npmjs.com/package/log-it-colored](https://www.npmjs.com/package/log-it-colored)

## Install

_IMPORTANT:_ This package is `ESM`-only

with `npm`

```bash
npm install log-it-colored
```

## Usage

```ts
import { Logger } from "log-it-colored";

Logger.violet("build complete", { files: 12 });
Logger.red("something went wrong:", "err");
Logger.success("deployed!");
```

result:

![](media/test-example-screenshot.png)

## License

The MIT License (MIT)

Copyright (c) 2025 Miralisher <mirasayon@ya.ru>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
