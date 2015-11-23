# boiler404 #
-------------
A boilerplate starter app for next level React404 projects featuring routes, navigation, sidebars, sitemap and user login. Don't forget your towel.

Tech Stack
-------------

* [ES6](https://babeljs.io/docs/learn-es6/)
* [SASS](http://sass-lang.com/)
* [bourbon](http://bourbon.io/)
* [Webpack](https://github.com/webpack/webpack)
* [React](https://github.com/facebook/react)
* [Alt](http://alt.js.org/)
* [EsLint](http://eslint.org/)
* [Express](http://expressjs.com/)

Usage
-------------
1) BUNDLE:
`npm run dev-server-client`

2) SERVE:
`npm run dev-server`

3) VISIT `localhost:4040`

STRUCTURE
-------------
```
.
├── /public/assets/             # Compiled output
├── /node_modules/              # 3rd-party libraries and utilities
├── /app/                       # Source code of the client application
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /components/            # React components
|       |── /__tests__/         # React components unit tests
│   ├── /images/                # Image assets
│   ├── /stores/                # Stores contain the application state and logic
│   ├── /styles/                # CSS directory, includes core styles + bourbon
│   ├── /utils/                # Helper functions
│   ├── alt.js                 # Instance of [Alt](http://alt.js.org/)
│   ├── client.js               # Client side app renderer script
│   ├── routes.js               # React router configuration
│   ├── server.js               # Server side app renderer script
├── /scripts/                    # The source code of the server application
│   ├── server.js               # Server startup script
└── .babelrc                    # Babel config
└── .eslintrc                   # Es lint rc
└── package.json                # The list of 3rd party libraries and utilities
└── webpack.config.babel.js     # Webpack config
```

HTML CONFIG
-------------
To pass custom meta data and script tags in the `<Head>`, use the `config.json` in `app/components/App/` [react-helmet](https://github.com/nfl/react-helmet), now you will be able to enhance head dom part with one json configuration [file](https://github.com/darul75/web-react/blob/master/assets/config.json).

```json
{
  "title": "boiler404",
  "meta":[
    {
      "name": "description",
      "content": "Boilerplate for next level React404 projects."
    },
    {
      "name": "viewport",
      "content": "width=device-width, initial-scale=1"
    }
  ],
  "link": [
    {
      "rel": "shortcut icon",
      "href": "/favicon.ico",
      "type": "image/x-icon"
    },
    {
      "rel": "icon",
      "href": "/favicon.ico",
      "type": "image/x-icon"
    }
  ]
}
```

## License

The MIT License (MIT)

Copyright (c) 2015 ART404

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