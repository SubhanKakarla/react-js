import React from "react"
import ReactDOM from "react-dom/client"
// Nested elements

const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
       // React.createElement("h1",{},"I'm a H1 Tag")
      [ React.createElement("h1",{},"I'm a h1 Tag"),
        React.createElement("h2",{},"I'm a h2 Tag") ]
    )
)

console.log(parent) //Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);