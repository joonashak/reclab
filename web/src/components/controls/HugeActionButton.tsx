import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { string } from 'prop-types';
import { navigate } from 'gatsby';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme: Theme) => createStyles({
  button: {
    backgroundColor: '#b380f77a',
    color: 'black',
    border: '2px solid black',
    padding: '10px 20px',
    marginBottom: '1rem',
    '& > .MuiButton-label': {
      display: 'flex',
      flexDirection: 'row',
    },
  },
  title: {
    fontSize: theme.typography.h4.fontSize,
    maxWidth: 250,
    lineHeight: '2rem',
  },
  subtitle: {
    fontSize: theme.typography.h6.fontSize,
    lineHeight: '2rem',
    marginBottom: '0.5rem',
  },
  mainIcon: {
    width: 60,
    margin: 0,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
  },
  iconDiv: {
    width: 80,
    fontSize: 50,
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 12,
  },
  left: {
    marginRight: 16,
    marginLeft: 5,
  },
}));

const HugeActionButton = ({
  to, title, subtitle, iconSrc,
}) => {
  const classes = useStyles();

  return (
    <Button
      onClick={() => navigate(to)}
      variant="contained"
      focusRipple
      centerRipple
      className={classes.button}
    >
      <div className={[classes.iconDiv, classes.left].join(' ')}>
        <img src={iconSrc} className={classes.mainIcon} alt="Icon" />
      </div>
      <div className={classes.label}>
        {subtitle && (<span className={classes.subtitle}>{subtitle}</span>)}
        <span className={classes.title}>{title}</span>
      </div>
      <div className={classes.iconDiv}>
        <ArrowForwardIosIcon fontSize="inherit" />
      </div>
    </Button>
  );
};

HugeActionButton.propTypes = {
  to: string.isRequired,
  title: string.isRequired,
  subtitle: string,
  iconSrc: string.isRequired,
};

HugeActionButton.defaultProps = {
  subtitle: null,
};

export default HugeActionButton;
