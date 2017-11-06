import { spacingUnit } from './style-constants';
import HeaderLogo from '../components/header-logo';
import Link from 'gatsby-link';
import React from 'react';

 const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: spacingUnit,
    }}
  >
    <div
      style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: `${spacingUnit} 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <HeaderLogo> Jaime Rios</HeaderLogo>
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
