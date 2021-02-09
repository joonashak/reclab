import React from 'react';
import { string } from 'prop-types';

const logoPartialBottom = require('./logo_partial_bottom.png');

const LogoPartialBottom = ({ className }) => <img src={logoPartialBottom} className={className} alt="Logo" />;

LogoPartialBottom.propTypes = {
  className: string,
};

LogoPartialBottom.defaultProps = {
  className: null,
};

export default LogoPartialBottom;
