import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { string } from 'prop-types';
import { navigate } from 'gatsby';

const useStyles = makeStyles((theme: Theme) => createStyles({
  button: {
    width: '100%',
    backgroundColor: '#b380f77a',
    color: 'black',
    border: '2px solid black',
    '& > .MuiButton-label': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  title: {
    fontSize: theme.typography.h4.fontSize,
    lineHeight: '3rem',
  },
  subtitle: {
    fontSize: theme.typography.h6.fontSize,
    lineHeight: '2rem',
  },
}));

const HugeActionButton = ({ to, title, subtitle }) => {
  const classes = useStyles();

  return (
    <Button
      onClick={() => navigate(to)}
      variant="contained"
      focusRipple
      centerRipple
      className={classes.button}
    >
      <span className={classes.subtitle}>{subtitle}</span>
      <span className={classes.title}>{title}</span>
    </Button>
  );
};

HugeActionButton.propTypes = {
  to: string.isRequired,
  title: string.isRequired,
  subtitle: string,
};

HugeActionButton.defaultProps = {
  subtitle: null,
};

export default HugeActionButton;
