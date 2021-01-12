import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { string } from 'prop-types';
import { navigate } from 'gatsby';
import amber from '@material-ui/core/colors/amber';

const useStyles = makeStyles((theme: Theme) => createStyles({
  button: {
    height: 200,
    width: 300,
    color: 'white',
    backgroundColor: amber[800],
    '& > .MuiButton-label': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  title: {
    fontSize: theme.typography.h5.fontSize,
  },
  subtitle: {
    fontSize: theme.typography.h6.fontSize,
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
  to: string,
  title: string.isRequired,
  subtitle: string,
};

HugeActionButton.defaultProps = {
  to: '.',
  subtitle: null,
};

export default HugeActionButton;
