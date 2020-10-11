import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import react from './images/react.png'

ReactDOM.render(
  <div>
  <div className="prime" style={{border: 'solid 1px black', maxWidth: '100vw'}}>
  <h1 className="title_red">Hello My name is Hamza Chokri </h1>
  <br />
  <div className="images">
  <img src="./image/js.png" width={320} height={240} />
  <br />
  <img src={react} width={320} height={240} />
  </div>
  
  </div>
  <div className="video">
  <iframe width={320} height={240} src="https://www.youtube.com/embed/NT299zIk2JY" ></iframe>
  </div>
  
  </div>,document.getElementById('root')
);

