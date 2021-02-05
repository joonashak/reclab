import React from 'react';
import { string } from 'prop-types';

const logoVerticalInv = require('./logo_vertical_inv.png');

const Logo = ({ className }) => <img src={logoVerticalInv} className={className} alt="Logo" />;

Logo.propTypes = {
  className: string,
};

Logo.defaultProps = {
  className: null,
};

export default Logo;
