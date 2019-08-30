import React from 'react';
import { Link } from 'gatsby';
import { navbarStyles, navlinkStyles, navlistStyles } from '../styles/styles';
let pages = [['Home', '/'], ['About me', '/about-me']];
export default () => (
  <nav>
    <ul style={navbarStyles}>
      {pages.map((page, i) => <li style={navlistStyles} key={`nav-link-${i}`}><Link style={navlinkStyles} to={page[1]}>{page[0]}</Link></li>)}
    </ul>
  </nav>);
