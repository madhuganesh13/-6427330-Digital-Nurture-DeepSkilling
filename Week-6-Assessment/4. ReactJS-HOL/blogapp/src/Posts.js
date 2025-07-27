// src/Posts.js
import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: "The Future of Web Development",
          body: "Modern frameworks like React and Next.js are shaping the way developers build fast and scalable applications."
        },
        {
          id: 2,
          title: "Understanding Component Lifecycle",
          body: "Mastering lifecycle methods is key to optimizing performance and handling side effects in React applications."
        },
        {
          id: 3,
          title: "Why Learn React Today",
          body: "React is one of the most popular JavaScript libraries, making it essential for frontend developers to know."
        }
      ],
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    console.error("Error caught in component:", error, info);
    this.setState({ hasError: true });
    alert("An error occurred in the component!");
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading posts.</h2>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
