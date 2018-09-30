import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../../utils/typography'

import headerStyles from "./Header.css"

console.log(headerStyles)

const Header = () => (
  <div
    className={headerStyles.myheader}
  >
    Heelo
  </div>
);

export default Header
