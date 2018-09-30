import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../../utils/typography'

import Header from '../header/Header';

// import layoutStyles from "./layout.css"

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = '/'
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Maksym Kondratiuk Blog
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            // fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Maksym Kondratiuk Blog
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {/* <Header /> */}
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
