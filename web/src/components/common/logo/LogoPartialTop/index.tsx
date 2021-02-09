import React from 'react';
import { string } from 'prop-types';

const logoPartialTop = require('./logo_partial_top.png');

const LogoPartialTop = ({ className }) => <img src={logoPartialTop} className={className} alt="Logo" />;

LogoPartialTop.propTypes = {
  className: string,
};

LogoPartialTop.defaultProps = {
  className: null,
};

export default LogoPartialTop;
