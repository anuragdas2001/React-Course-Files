import React from "react";
import styled from "styled-components";
import MovieList from "./MovieList";

//Styled Components
const Nav = styled.div`
height: 6vh;
// width: 100%;
margin: 0.1px;
display: flex;
justify-content: center;
// border: 1px solid black;
// visibility:hidden;
//Dynamic Styling using Styled Components
visibility:${(props)=>props.show ? "visible" : "hidden"};
&:hover{background-color: #bc16dd};
`

class NavBar extends React.Component {
    
  render() {
    const {CartCount} = this.props;
    console.log(CartCount);
    return (
      <>
        <Nav show={true}>
          <div style={style.title}>ReelVerse</div>
          <div style={style.cartcontainer}>
            <img style={style.carticon} src="https://cdn-icons-png.flaticon.com/128/5952/5952750.png" alt="carticon"></img>
            <span style={style.cartcount}>{CartCount}</span>
          </div>
        </Nav>
      </>
    );
  }
}

export default NavBar;

//CSS Scopes (Internal CSS)
const style = {
  NavBar: {
    height: "6vh",
    width: "100%",
    // margin: "0.1px",
    display: "flex",
    justifyContent: "space-between",
    // border: "1px solid black",
  },

  title: {
    color: "navy",
    fontFamily: "Times",
    fontSize:40,
    textTransform:"uppercase"
  },
  cartcontainer: {
    height:"8rem",
    width:"8rem",
    // border: "1px solid black",
    position: "absolute",
    right:0,
    top: "10px",
    margin:"3px",
    padding:"5px"
  },
  carticon: {
    height:"2rem",
    width:"2rem",
    // padding:"2px",

  },

  cartcount: {
    height:"1.5rem",
    width:"1.5rem",
    borderRadius:"50%",
    backgroundColor:"black",
    position:"absolute",
    textAlign:"center",
    top:"-0.1rem",
    right:85,
    color:"white",
    // padding:"2px"


  },
};
