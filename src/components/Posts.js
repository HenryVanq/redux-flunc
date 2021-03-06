import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { fetchPosts } from "../actions/postType";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  render() {
    const postItems = this.props.posts.map((post, index) => (
      <div key={index}>
        {" "}
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {[...postItems]}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: propTypes.func.isRequired,
  posts: propTypes.array.isRequired,
  newPost: propTypes.object,
};
const mapsStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

export default connect(mapsStateToProps, { fetchPosts })(Posts);
