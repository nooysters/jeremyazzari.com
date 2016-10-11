import React, { Component } from 'react'
import { render } from 'react-dom'

export default class Blog extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    console.log(this.props)
    return(
      <div>
        <h1>Blog</h1>
        <Post />
      </div>
    )
  }
}

class Post extends Component {
  render() {
    return(
      <article>
        <span>subject: {this.props.subject}</span>
        <span>date: {this.props.time}</span>
        <div>body: {this.props.body}</div>
      </article>
    )
  }
}
