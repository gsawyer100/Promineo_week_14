import React, { Component } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

class Movie extends Component {
  state = {
    reviews: this.props.movie.reviews
  };

  handleReviewSubmit = (review) => {
    this.setState((prevState) => ({
      reviews: [...prevState.reviews, review]
    }));
  };

  render() {
    const { id, title, img, synopsis, rating } = this.props.movie;
    const { reviews } = this.state;

    return (
      <div>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{synopsis}</p>
        <Stars rating={rating} />
        <ReviewList reviews={reviews} />
        <ReviewForm movieId={id} onReviewSubmit={this.handleReviewSubmit} />
      </div>
    );
  }
}

export default Movie;