function sum(){
let a=10+5;
return a;

}

const header = <h1>JSX EXPRESSION</h1>; //JSX EXPRESSION
function App(){
    const name = "Anurag";
    const age = 22;
    const isMarried =false;
    let demo = undefined;
    return(<>
    <h1>LETS LEARN JSX</h1>
    {header}
    <h2>Hi {name}</h2>
    <h2>Your Age is {age}</h2>
    <h2>Your Demo is {demo}</h2>
    <h3>Am i married?:{isMarried.toString()}</h3>
    <h3>Calling Sum Function {sum()}</h3>
    

    </>);
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>);