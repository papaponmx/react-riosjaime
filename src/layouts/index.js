import { spacingUnit } from '../components/style-constants';
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Header from '../components/header'
import './index.css';
const TemplateWrapper = ({ children }) => (
        <div>
          <Helmet
            title="Jaime Rios Front End Developer"
            meta={[
              { name: 'description', content: 'I’m Jaime a freelance Front End Developer based in Mexico City. Developing for the web since 2015, helping online businesses, entrepreneurs, users and organizations reach their goals faster, by developing faster, useful and responsive websites.' },
              { name: 'keywords', content: 'web, front end developer, javascript, web developer, mexico city' },
            ]}
          />
          <Header />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: `0px 1.0875rem ${spacingUnit}`,
              paddingTop: 0,
            }}
          >
            {children()}
          </div>
        </div>
        )

        TemplateWrapper.propTypes = {
          children: PropTypes.func,
        }

export default TemplateWrapper
