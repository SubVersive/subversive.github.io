import React from 'react'

import { rhythm } from '../../utils/typography'

import Header from '../header/Header';
import Menu from '../menu/Menu';

const Layout = ({ children, location }) => (
  <div
    style={{
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: rhythm(28),
    }}
  >
    <Header />
    <Menu path={location.pathname} />
    {children}
  </div>
);

export default Layout
