import React, { Component } from 'react'
import { render } from 'react-dom'

export default class Blog extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    let posts = this.props.blogData.posts
    posts = posts.map( (post)=> { return <Post post={post} key={post.id}/> })

    return(
      <div>
        <h1>Blog</h1>
        {posts}
      </div>
    )
  }
}

class Post extends Component {
  render() {
    return(
      <article>
        <span>subject: {this.props.post.subject}</span>
        <span>date: {this.props.post.timeStamp}</span>
        <div>body: {this.props.post.body}</div>
      </article>
    )
  }
}
