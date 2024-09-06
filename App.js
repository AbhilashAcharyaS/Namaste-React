import React from 'react';
import ReactDOM from "react-dom/client";

// const jsxheading= <h1>Hi from react Jsx</h1>;

// React element
const heading= <h1>heading using react element</h1>

// React functional component
const HeadingComponent = ()=>(
    <div id="container">
        <h1 className='heading'>Heading using react functionl component</h1>
    </div>
);

// React component composition
const Heading2=()=>{ return <h2>heading2</h2>};
const Heading3=()=>(
    <div>
        <Heading2/>
        <h3>Heading3</h3>
    </div>
);

//React element inside component

const Heading4=()=>{
    return (
        <div>
            <h1> Hi</h1>
            {heading}
        </div>
    );
}


const root= ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Heading4/>);
