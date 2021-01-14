import React from 'react';
import { Link as MuiLink } from 'gatsby-theme-material-ui';
import { string, node } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  link: {
    color: 'black',
    backgroundColor: '#e865f152',
    '&:hover': {
      textDecoration: 'none',
      borderTop: '5px solid black',
      borderBottom: '5px solid black',
    },
    // hover #d666e2
  },
});

const Link = ({ to, children }) => {
  const classes = useStyles();

  return <MuiLink to={to} className={classes.link}>{children}</MuiLink>;
};

Link.propTypes = {
  to: string.isRequired,
  children: node.isRequired,
};

export default Link;
