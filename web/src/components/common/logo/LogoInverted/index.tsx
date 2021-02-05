import React from 'react';
import { string } from 'prop-types';

const logoVerticalInv = require('./logo_vertical_inv.png');

const LogoInverted = ({ className }) => <img src={logoVerticalInv} className={className} alt="Logo" />;

LogoInverted.propTypes = {
  className: string,
};

LogoInverted.defaultProps = {
  className: null,
};

export default LogoInverted;
