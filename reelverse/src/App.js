import React from "react";
import MovieList from "./MovieList";
import Student from "./Student";
import NavBar from "./NavBar";
import { movies } from "./moviesData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      CartCount: 0,
    };
    // this.AddStars = this.AddStars.bind(this);
  }

  HandleIncStars = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].stars < 5) {
      movies[mid].stars += 0.5;
      this.setState({ movies: movies });
    }
  };

  HandleDecStars = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].stars > 0) {
      movies[mid].stars -= 0.5;
      this.setState({ movies: movies });
    }
  };

  HandleFav = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({ movies: movies });
  };
  HandleCart = (movie) => {
    const { movies,CartCount } = this.state;
    const mid = movies.indexOf(movie);
    // cartcount+=1;
    // this.state.CartCount+=1;
    // this.setState({CartCount:CartCount})
    movies[mid].cart = !movies[mid].cart;
    this.setState({ movies: movies });
    if(!movies[mid].cart && CartCount>0)
    this.setState({CartCount:CartCount-1 });
    else
    this.setState({CartCount:CartCount+1 });

  };
  render() {
    const { movies,CartCount } = this.state;
    console.log(CartCount);
    return (
      <>
        {/* <h1>ReelVerse</h1> */}
        <NavBar CartCount={CartCount} />
        <MovieList
          movies={movies}
          AddStars={this.HandleIncStars}
          RemoveStars={this.HandleDecStars}
          handleCart={this.HandleCart}
          handleFav={this.HandleFav}
        />
        {/* <Student />
      <Student name="Babai" info={{marks:56,motto:54}} />
      <Student name="Babai"/>
      <Student info={{marks:54}}/> */}
      </>
    );
  }
}
//Props are immutable & cannot be changed
Student.defaultProps = {
  name: "Anurag",
  info: {
    marks: 100,
    motto: "Web",
  },
};
export default App;
