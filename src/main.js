import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Link, Miss } from 'react-router'

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

const NoMatch = () => <h2>Not Found</h2>
const Home = () => <h2>Home</h2>

 class App extends Component {
   render () {
     console.log(this.props)
     return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>

          <hr/>

          <Match exactly pattern="/" component={Home} />
          <Match pattern="/blog" component={Blog} />

          <Miss component={NoMatch}/>
        </div>
      </BrowserRouter>
    )
  }
}
App.defaultProps = {appData}
render(<App/>, document.getElementById('root'))
