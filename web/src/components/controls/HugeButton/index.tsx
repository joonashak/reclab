import React from 'react';
import { ButtonBase } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { string } from 'prop-types';

type Props = { src: string }

const useStyles = makeStyles((theme: Theme) => createStyles({
  button: {
    height: 200,
    width: 300,
    border: '2px solid black',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: (props: Props) => `url("${props.src}")`,
    backgroundSize: 'cover',
    color: 'white',
  },
  title: {
    fontSize: theme.typography.h5.fontSize,
  },
  subtitle: {
    fontSize: theme.typography.h6.fontSize,
  },
}));

const HugeButton = ({ src }) => {
  const classes = useStyles({ src });

  return (
    <ButtonBase
      focusRipple
      centerRipple
      className={classes.button}
    >
      <span className={classes.subtitle}>Next show:</span>
      <span className={classes.title}>100 000 000 %</span>
    </ButtonBase>
  );
};

HugeButton.propTypes = {
  src: string.isRequired,
};

export default HugeButton;
