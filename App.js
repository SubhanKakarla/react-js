import React from "react"
import ReactDOM from "react-dom/client"

// JSX => HTML like syntax

const elem = <span>React element</span>
const Title = () => (
    
<h1 className="Head"  id="heading">{elem} Hello world using JSX !!!</h1>
);


//React Functional component

const HeadingComponent1 = () => {
    return <h1>React Functional Component</h1>
};

const HeadingComponent = () =>  (
<div>
    <Title/>
    <Title></Title>
    {Title()}
        <h1>React Functional Component</h1>
</div>
 ) ;


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading)
root.render(< HeadingComponent />)
