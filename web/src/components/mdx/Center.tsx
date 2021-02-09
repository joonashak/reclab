import React from 'react';
import { node } from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ContentPanel from '../common/ContentPanel/index';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '2rem',
  },
});

const Center = ({ children }) => {
  const classes = useStyles();

  return (
    <ContentPanel>
      <Typography align="center" className={classes.root}>{children}</Typography>
    </ContentPanel>
  );
};

Center.propTypes = {
  children: node.isRequired,
};

export default Center;
