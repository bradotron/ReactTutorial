import React from "react";
import Post from './post';
import PaginatedList from './paginatedlist';

class PostFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.fetchPosts = this.fetchPosts.bind(this);
  }

  componentDidMount() {
    // get all the posts
    this.fetchPosts();
  }

  fetchPosts = function() {
    fetch("/posts").then(response => {
      return response.json();
    }).then(body => {
      this.setState({
        posts: body.posts
      });
    })
  }
  
  render() {
    return (
      <div>
        <h1>Implementing Pagination...maybe</h1>
        <PaginatedList list={this.state.posts} Component={Post}/>
        <h1>Posts</h1>
        <ul>
          {this.state.posts.map(post => {
            return <li key={post.id}><Post post={post} /></li>;
          })}
        </ul>
      </div>
    );
  }
}

export default PostFeed;