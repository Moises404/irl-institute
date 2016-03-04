import path from 'path'
import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import createLocation from 'history/lib/createLocation'
import Helmet from 'react-helmet'
import {RoutingContext, match} from 'react-router'
import routes from './routes'

let app = express()
app.set('trust proxy', 'loopback')
app.set('x-powered-by', false)
app.use(express.static(path.join(__dirname, "../dist")))
app.use(express.static(path.join(__dirname, "../public")))


app.use((req, res, next) => {
  let location = createLocation(req.originalUrl)

  match({routes, location}, (error, redirectLocation, renderProps) => {
    if (redirectLocation) return res.redirect(redirectLocation.pathname)
    if (error) return next(error.message)
    if (renderProps == null) return next(error)

    let markup = renderToString(<RoutingContext {...renderProps}/>)
    let helmet = Helmet.rewind()
    let html = [
      `<!DOCTYPE html>`,
      `<html>`,
        `<head>`,
          `<title>IRL Institute</title>`,
          helmet.meta,
          helmet.link,
          `<meta charset="utf-8"/>`,
          `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
          `<meta name="description" content="In Real Life Institute"/>`,
          `<meta name="keywords" content="Exhibition, Event Space, NYC, Miami, Gallery, Technology"/>`,
          `<link rel="shortcut icon" href="images/favicon.ico">`,
          `<link rel="stylesheet" href="/client.css"></link>`,
        `</head>`,
        `<body>`,
          `<div id="app">${markup}</div>`,
        `</body>`,
        `<script type="text/javascript" src="/client.min.js"></script>`,
      `</html>`
    ].join('')
    res.setHeader('Content-Type', 'text/html')
    res.send(html)
  })
})

export default app

