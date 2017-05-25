import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
// acts like the Connect function
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    /*
    The props are available thanks to the reduxFrom function at bottom...

    - You can also write the handleSubmit like this:
        const handleSubmit = this.props.handleSubmit;

    - You can also write the fields like this:
        const title = this.props.fields.title;
        const categories = this.props.fields.categories;
        const content = this.props.fields.content;

    */
    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>

        <h3>Create a new post</h3>

        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
              {/* ternary JS expression:
              if title.touched is true then title.error
              if title.touched is false then do nothing
              */}
          </div>
        </div>

        <div className="form-group">
          <label>categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea type="text" className="form-control" {...content} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    );
  }
}

function validate(value) {
  const errors = {};

  if (!value.title) {
    errors.title = 'Enter a username';
  }

  return errors;
}

// connect: 1sr argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxFrom: 1st is from config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);

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