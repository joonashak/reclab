import { Link } from 'gatsby-theme-material-ui';
import React from 'react';
import { node, string } from 'prop-types';
import { useTranslation } from 'react-i18next';

const LogoLinkWrapper = ({ children, className }) => {
  const { i18n: { language } } = useTranslation();
  const localizedLink = language === 'fi' ? '/fi' : '/';

  return (
    <Link to={localizedLink} className={className}>
      {children}
    </Link>
  );
};

LogoLinkWrapper.propTypes = {
  children: node.isRequired,
  className: string,
};

LogoLinkWrapper.defaultProps = {
  className: null,
};

export default LogoLinkWrapper;
