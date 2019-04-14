import React from 'react';
import { Link } from 'gatsby';

import { rhythm } from '../../utils/typography'

import logoPng from './logo.png';

const container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: rhythm(2),
};

const logo = {
  width: 94,
  height: 67,
};

const logoLink = {
  ...logo,
  display: 'block',
};

const left = {
  flexGrow: '1',
};

const right = {
  flexGrow: '4',
  display: 'flex',
};

const promo = {
  marginLeft: 'auto',
  marginRight: '0.3rem',
  fontStyle: 'italic',
};

const Header = () => (
  <div style={container}>
    <div style={left}>
      <div style={logo}>
        <Link style={logoLink} to='/' rel="home">
          <img alt="logo" src={logoPng} />
        </Link>
      </div>
    </div>
    <div style={right}>
      <div style={promo}><h3>just code it</h3></div>
    </div>
  </div>
);

export default Header
