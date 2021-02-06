import React from 'react';
import { node } from 'prop-types';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ContentPanel from '../common/ContentPanel';

const useStyles = makeStyles((theme: Theme) => createStyles({
  body1: {
    textAlign: 'justify',
    marginBottom: '2rem',
    [theme.breakpoints.up('sm')]: {
      margin: '0 3rem 2rem 3rem',
    },
    clear: 'both',
  },
}));

const Paragraph = ({ children }) => {
  const classes = useStyles();

  return (
    <ContentPanel>
      <Typography classes={classes}>{children}</Typography>
    </ContentPanel>
  );
};

Paragraph.propTypes = {
  children: node.isRequired,
};

export default Paragraph;
