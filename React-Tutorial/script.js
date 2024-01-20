/* JAVASCRIPT */

// const heading = document.getElementById("root");
// heading.textContent="HELLO WORLD";
// heading.className="Header";
// document.getElementById("root").append(heading);

// console.log("JAVASCRIPT Heading",heading);



/*REACT WITH JS */

// const imgElement = React.createElement("img", {
//   className: "image",
//   src: "https://files.codingninjas.in/coding-ninjas-24647.png",
// });
// ReactDOM.createRoot(document.getElementById("root")).render(imgElement);
// console.log("imgElement", imgElement);

// const reactHeading = React.createElement('h1',{className:"Heading"},"Hello World");
// const subHeading = React.createElement('h2',{className:"sub-heading",children:"Hello React"});

// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);
// ReactDOM.createRoot(document.getElementById("root")).render(subHeading);


// ReactDOM.root(document.getElementById("root")).render(subHeading);

/*REACT WITH JSX(JAVASCRIPT XML) (BABEL) */

const jsxHeading = (<h1>HELLO JSX</h1>);

const ReactFragments1 = <React.Fragment>
                    <h1>This is</h1>
                    <h2>React Fragments</h2>
                </React.Fragment>
                /* OR */
const ReactFragments2 = <>
                    <h1>This is</h1>
                    <h2>React Fragments</h2>
                </>

// const jsx = <Name> <h1>
//     About React
// </h1>
// <ol>
//     <li>
//         Supports BABEL
//     </li>
//     <li>
//         Supports Virtual DOM
//     </li>
//     <li>
//         Supports Single Page Applications
//     </li>
// </ol>
// </>


/*FUNCTION BASED COMPONENT */

function App(){
    return(
        <>
                    <h1>This is</h1>
                    <h2>React FUNCTION COMPONENT</h2>
        </>
    )
}

// function App1(){
//     return (
//     <>
//     <h1>React Project</h1>
//     <p>Skills used to make this project</p>
//     <ol>
//     <li>HTML</li>
//     <li>javaScript</li>
//     <li>CSS</li>
//     </ol>
    
    
//     </>);
// }


const Fc = () => {
    return (
            <>
            <h1>React Project</h1>
            <p>Skills used to make this project</p>
            <ol>
            <li>HTML</li>
            <li>javaScript</li>
            <li>CSS</li>
            </ol>
            
            
            
            </>);
}

 function Name(){
        
        const name = "Anurag";
        return (<><Fc/><>YOUR NAME,{name}</></>);
}

// ReactDOM.createRoot(document.getElementById("root")).render(jsx);
// ReactDOM.createRoot(document.getElementById("root")).render(App()); //function call 
// ReactDOM.createRoot(document.getElementById("root")).render(<App/>); //actual component
// ReactDOM.createRoot(document.getElementById("root")).render(<Fc/>); //arrow function component
ReactDOM.createRoot(document.getElementById("root")).render(<Name/>); //arrow function component

// ReactDOM.root.append(Babel);