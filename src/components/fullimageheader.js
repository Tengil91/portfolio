import React from 'react';
import { fullImageHeaderStyles, fullImageHeaderContainerStyles, centeredText } from '../styles/styles';
console.log(centeredText);
export default props => (
  <header style={fullImageHeaderContainerStyles}>
    <div style={{...fullImageHeaderStyles, backgroundImage: `url(${props.url})`}}></div>
    <div style={centeredText}>
      {props.children}
    </div>
  </header>
);
