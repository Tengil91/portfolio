import React from 'react';
import FullImageHeader from './fullimageheader';
import Nav from './nav'
import { containerStyles, headerTitleStyles, headerDescriptionStyles, blogContentStyles } from '../styles/styles';

export default props => (
  
  <div style={containerStyles}>
    <FullImageHeader url={props.headerImgUrl}>
      {props.pageTitle ? <h1 style={headerTitleStyles}>{props.pageTitle}</h1> : ""}
      {props.headerDescription ? <p style={headerDescriptionStyles}>{props.headerDescription}</p> : ""}
    </FullImageHeader>
    <Nav />
    <div style={blogContentStyles}>
      <main style={{width: '70%', margin: 'auto'}}>
        {props.children}
      </main>
    </div>
  </div>
);