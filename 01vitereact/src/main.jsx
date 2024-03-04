import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';


function Myapp(){
  return (
    <div>
      <h1>custome app !</h1>
      </div>
  )
}


// Fails coz Bables doesn't identifies the sintex

// const reactElement = {
//   type : 'a',
//   props : {
//       href : 'https://google.com',
//       target : '_blank'
//   },
//   children : 'Click me to visit google'
// }


const anathorElement = (
  <a href='https//google.com' target='_blank'>Visit Google</a>
)

// let's dot it with right sintex 
// as Babale says (https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js)
const reactElement =React.createElement(
  'a',
  {href : 'https://google.com', target: '_blank'},
  'click me to visit google'
)


ReactDOM.createRoot(document.getElementById('root')).
render(
  reactElement
);
