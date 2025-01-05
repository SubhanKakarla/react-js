// Nested elements

const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
       // React.createElement("h1",{},"I'm a H1 Tag")
      [ React.createElement("h1",{},"I'm a H1 Tag"),
        React.createElement("h2",{},"I'm a H2 Tag") ]
    )
)


console.log(parent) //Object

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);