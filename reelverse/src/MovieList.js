import { Component } from "react";
import MovieCard from "./Moviecard";
class MovieList extends Component {
  render() {
    // const { title, plot, price, rating, stars, fav, cart } = this.state.movie;
    // console.log(this.state.movie);
    const { movies, AddStars, RemoveStars, handleCart, handleFav } = this.props;
    // console.log(this.props);
    return (
      <>
        {/* <h1>Movie List</h1> */}
        {/* <MovieCard title={title} plot={plot} price={price} rating={rating} stars={stars} fav={fav} cart={cart}/> */}
        {/* <MovieCard movies={this.state.movie} /> */}
        {movies.map((movie)=> <MovieCard 
        movies={movie}
        AddStars={AddStars} 
        RemoveStars={RemoveStars}
        handleCart={handleCart}
        handleFav={handleFav}
        key={movie.id}
        />)}
      </>
    );
  }
}

export default MovieList;
