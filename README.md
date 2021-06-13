# xp-session-store

----

<p align="center"><a href="https://www.npmjs.com/package/xp-session-store"><img src="https://raw.githubusercontent.com/jinxrat/xp-session-store/main/.github/xp.png"></a></p>

<p align="center">An express-session storage with mongoose.connection (MongoDB)</p>

----

## Installation

    $ npm install xp-session-store

## Dependencies

[![](https://img.shields.io/github/package-json/dependency-version/jinxrat/xp-session-store/date-fns)](https://www.npmjs.com/package/date-fns)

## Example

```js
const mongoose = require("mongoose");
const app = require("express")();
const session = require("express-session");
const xpSessionStore = require("xp-session-store");

mongoose.connect("MONGODB_URI", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.use(
  session({
    secret: "shhh! it's a secret",
    store: new xpSessionStore({
      /* All options are optional */
      collection: "sessions",
      dbname: "myotherdb",
      /* How to use expires option:
      https://date-fns.org/docs/add */
      expires: { days: 7 },
    }),
    /* About resave and saveUninitialized:
    https://stackoverflow.com/a/40396102/15275415 */
    resave: false,
    saveUninitialized: false,
  })
);

app.listen(3000)
```

That's it!

[![](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/jinxom)

----

[![](https://img.shields.io/npm/v/xp-session-store)](https://www.npmjs.com/package/xp-session-store)
[![](https://img.shields.io/bundlephobia/min/xp-session-store)](https://www.npmjs.com/package/xp-session-store)
[![](https://img.shields.io/npm/dt/xp-session-store)](https://www.npmjs.com/package/xp-session-store)
[![](https://img.shields.io/github/issues-raw/jinxrat/xp-session-store)](https://github.com/jinxrat/xp-session-store/issues)
