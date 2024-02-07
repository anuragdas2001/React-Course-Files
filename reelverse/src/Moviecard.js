import React from "react";
import NavBar from "./NavBar";

class MovieCard extends React.Component {
    
    // RemoveStars = () => {
    //     if(this.state.stars>0)
    //     this.setState({stars:this.state.stars-0.5})
    // }
    //Arrow Function automatically binds to the current instance
  //   AddStars = () => {
        
  //       //form1
  //       // this.setState({
  //       //     stars:this.state.stars + 0.5
  //       // });

         
  //       //form2
  //       // this.setState((prevState)=>{
  //       //     return({
  //       //         stars:prevState.stars+0.5
  //       //     })
  //       // })


  //       if(this.state.stars<5)
  //        this.setState({stars:this.state.stars + 0.5});

  //       //setState() is an asynchronous function which schedules the state update

  //       //  console.log(this.state.stars);
  //       //  this.state.stars+=0.5;
  //       //  console.log(this.state.stars);
        
  // }

  // HandleFav = () => {
  //   console.log("HandleFav");
  //   this.setState({fav:!this.state.fav})
  // }

  // HandleCart = () => {
  //   console.log("HandleCart");
  //   this.setState({cart:!this.state.cart})

  // }

  render() {
    //Renaming using :(colon)
      // const {movies:data}=this.props;
      // console.log(data)
      // const {title,plot,price,rating,stars,fav,cart} = this.props;
    //   console.log(stars);

    const {movies,AddStars,RemoveStars,handleCart,handleFav} = this.props
    // console.log(this.props);
    return (
      <div className="main">
        <div className="movieCard">
          <div className="left">
            <img
              alt="Poster"
              src={movies.poster}
            ></img>
          </div>

          <div className="right">
            <div className="title">{movies.title}</div>
            <div className="plot">{movies.plot}</div>
            <div className="price">Rs.{movies.price}</div>

            <div className="footer">
              <div className="rating">{movies.rating}</div>
              <div className="star-dis">
                <img onClick={()=>{RemoveStars(movies)}}
                  className="star-btn"
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                ></img>
                <img
                  className="stars"
                  alt="stars"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                ></img>
                <img onClick={()=>{AddStars(movies)}}
                  className="star-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/32/32563.png"
                ></img>
                <span>{movies.stars}</span>
              </div>
              {movies.fav ? <button  className="unfavourite-btn" onClick={()=>{handleFav(movies)}}>Unfavourite</button> : <button className="favourite-btn" onClick={()=>{handleFav(movies)}}>Favourite</button>}
              {movies.cart ? <button className="remove-cart-btn" onClick={()=>{handleCart(movies)}}>Remove from cart</button> : <button className="cart-btn" onClick={()=>{handleCart(movies)}}>Add to cart</button>}
              
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
