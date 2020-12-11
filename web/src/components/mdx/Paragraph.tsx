import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  body1: {
    textAlign: 'justify',
    marginBottom: '2rem',
    [theme.breakpoints.up('sm')]: {
      margin: '0 3rem 2rem 3rem',
    },
  },
}));

const Paragraph = ({ children }) => {
  const classes = useStyles();

  return <Typography classes={classes}>{children}</Typography>;
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paragraph;
