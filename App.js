import React from 'react';
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {}, "Hello from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


/* <div id="id1">
        <div id="id2">
            <h1>Heading1</h1>
            <h2>Heading2</h2>
        </div>
    </div> */
const heading= React.createElement('div',{id:"id1"},
    React.createElement('div',{id:"id2"}, 
        [React.createElement('h1',{},'Heading1'), React.createElement('h2',{},'Heading2')]));

const root= ReactDOM.createRoot(document.querySelector('#root'));
root.render(heading)