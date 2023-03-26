import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
  state = {
    movies: [
      {
        id: 1,
        title: 'The Shawshank Redemption',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51YXyXaJnzL.jpg',
        synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        rating: 9.3,
        reviews: []
      },
      {
        id: 2,
        title: 'The Godfather',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51LZrC%2BEzrL.jpg',
        synopsis: 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.',
        rating: 9.2,
        reviews: []
      },
      {
        id: 3,
        title: 'The Dark Knight',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg',
        synopsis: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        rating: 9.0,
        reviews: []
      }
    ]
  };

  render() {
    const { movies } = this.state;

    return (
      <div>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;