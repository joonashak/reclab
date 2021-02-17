import React from 'react';
import { makeStyles } from '@material-ui/core';
import { node } from 'prop-types';
import { codeBackground } from '../../../../themes/adminTheme';

const useStyles = makeStyles({
  code: {
    fontFamily: 'Roboto Mono',
    backgroundColor: codeBackground,
    padding: '0.05em 0.3em',
  },
});

const Code = ({ children }) => {
  const classes = useStyles();

  if (!children) {
    return null;
  }

  return (
    <span className={classes.code}>
      {children}
    </span>
  );
};

Code.propTypes = {
  children: node,
};

Code.defaultProps = {
  children: null,
};

export default Code;
