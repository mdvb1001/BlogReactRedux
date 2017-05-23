import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
// acts like the Connect function

class PostsNew extends Component {
  render() {
    return (
      <form>
        <h3>Create a new post</h3>

        <div className="form-group">
          <label>Title</label>
          <input type="text" classNaem="form-control" />
        </div>

        <div className="form-group">
          <label>categories</label>
          <input type="text" classNaem="form-control" />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea type="text" classNaem="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    );
  }
}

export default reduxFrom ({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
})(PostsNew);

/*
user types something in... record it on application state

stare === {
  form: {
    PostsNewForm: {
      title: '...',
      categories: '...',
      content: '...'
    }
  }
}
*/