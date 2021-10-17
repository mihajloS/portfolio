import * as React from 'react'
import * as ReactDom from 'react-dom'
import { App } from './App'
import './js/jquery.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/font-awesome.min.css'
import './css/style.css'
// import './js/custom.js' // -> this is for loader animation

ReactDom.render(<App/>, document.getElementById('output'));
