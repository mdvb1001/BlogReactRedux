import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators} from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  // we fetch the data as soon as the page loads...
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <span className="pull-xs-right">{post.categories}</span>
          <strong>{post.title}</strong>
        </li>
        );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
          Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
          <ul>{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }
// and add "mapDispatchToProps" instead of { fetchPosts: fetchPosts } below

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsIndex);

// the { fetchPosts: fetchPosts } is a shortcut for the mapDispatch function above
// You can actually write the above like this:
// export default connect(null, { fetchPosts })(PostsIndex);