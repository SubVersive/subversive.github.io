import React from 'react'

import { rhythm } from '../../utils/typography'

import Header from '../header/Header';
import Menu from '../menu/Menu';

import styles from './Layout.module.css';

console.log({ styles })

const Layout = ({ children, location }) => (
  <div
    className={styles.Layout}
    style={{
      maxWidth: rhythm(28),
    }}
  >
    <Header />
    <Menu path={location.pathname} />
    {children}
  </div>
);

export default Layout
