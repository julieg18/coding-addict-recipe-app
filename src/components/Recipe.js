import React, { Component } from 'react';

export default class Recipe extends Component {
  render() {
    const {
      image_url,
      title,
      source_url,
      publisher,
      recipe_id,
    } = this.props.recipe;
    return (
      <React.Fragment>
        {console.log(image_url)}
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img
              className="img-card-top"
              src={image_url}
              alt="recipe"
              style={{ height: '14rem' }}
            />
            <div className="card-body text-capitalize">
              <h6>{title}</h6>
              <h6 className="text-warning text-slanted">
                provided by {publisher}
              </h6>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-primary text-capitalize">
                details
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
