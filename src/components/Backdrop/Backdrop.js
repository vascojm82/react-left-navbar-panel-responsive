import React from 'react';
import './Backdrop.css';

let backdrop = props => (
  <div className="backdrop" onClick={props.click}></div>
);

export default backdrop;
