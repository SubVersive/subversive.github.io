import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../../utils/typography';

const container = {
  marginTop: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: rhythm(1),
  borderTop: '1px solid #eee'
};

const logo = {
  width: 94,
  height: 67,
};

const left = {
  flexGrow: '1',
};

const right = {
  flexGrow: '4',
  display: 'flex',
};

const link = {
  fontSize: '1rem',
  marginRight: '1rem',
};

const aboutLink = {
  fontSize: '1rem',
  marginLeft: 'auto',
};

const selected = {
  ...link,
  fontWeight: 'bold',
};

const selectedAboutLink = {
  ...aboutLink,
  fontWeight: 'bold',
};

const renderLink = (text, path, current) => (
  <Link style={current === path ? selected : link} to={path} rel="next">{text}</Link>
);
const renderAboutLink = (text, path, current) => (
  <Link style={current === path ? selectedAboutLink : aboutLink} to={path} rel="next">{text}</Link>
);

const Menu = ({ path }) => (
  <div style={container}>
    <div style={left}>
      {renderLink('nodejs', '/nodejs', path)}
      {renderLink('react', '/react', path)}
    </div>
    <div style={right}>
      {renderAboutLink('about me', '/about', path)}
    </div>
  </div>
);

export default Menu
