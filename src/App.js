import React from 'react';
import './App.css';
import CompaEditor from './components/compaEditor';

const html = 
`<h1>Hola <h1/>
<ul>
  <li>uno</li>
</ul>

`;


function App() {

  return (
    <div className="App">
      <CompaEditor html={html}/>
    </div>
  );
}

export default App;
