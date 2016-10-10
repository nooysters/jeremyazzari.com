import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'
import Blog from './components/blog'

let appData = {
  blog: {
    posts: [
      {
        subject: 'Some Subject',
        body: "Some Body, somebody?",
        timeStamp: new Date()
      },
      {
        subject: 'Some Other Subject',
        body: "Some Other post Body, somebody else?!?!?",
        timeStamp: new Date()
      }
    ]
  }
}

class App extends Component {
  render() {
    return(
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/blog">blog</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

class NoMatch extends Component {
  render() {
    return( <h1>Page not found</h1> )
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="blog" component={Blog}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'))
