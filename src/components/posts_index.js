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

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
          Add a Post
          </Link>
        </div>
        List of blog posts
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }
// and add "mapDispatchToProps" instead of { fetchPosts: fetchPosts } below

export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);

// the { fetchPosts: fetchPosts } is a shortcut for the mapDispatch function above
// You can actually write the above like this:
// export default connect(null, { fetchPosts })(PostsIndex);