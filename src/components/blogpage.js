import React from 'react';
import FullImageHeader from './fullimageheader';
import { containerStyles, headerTitleStyles, headerDescriptionStyles, blogContentStyles } from '../styles/styles';

export default props => (
  
  <div style={containerStyles}>
    <FullImageHeader url={props.headerImgUrl}>
      {props.pageTitle ? <h1 style={headerTitleStyles}>{props.pageTitle}</h1> : ""}
      {props.headerDescription ? <p style={headerDescriptionStyles}>{props.headerDescription}</p> : ""}
    </FullImageHeader>
    <div style={blogContentStyles}>
      <main style={{width: '70%'}}>
        {props.children}
      </main>
    </div>
  </div>
);