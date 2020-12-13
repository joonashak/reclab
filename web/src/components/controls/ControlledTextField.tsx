import React from 'react';
import {
  string, node, oneOf, shape, bool,
} from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField, makeStyles } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  root: {
    minHeight: '5.5rem',
    marginBottom: '0 !important',
  },
}));

const ControlledTextField = ({
  formControl, name, children, type, label, rules, multiline, autoComplete, autoFocus,
}) => {
  const classes = useStyles();
  const { control, errors } = formControl;

  return (
    <Controller
      as={TextField}
      name={name}
      id={name}
      control={control}
      error={!!errors[name]}
      helperText={errors[name] && errors[name].message}
      defaultValue=""
      variant="filled"
      fullWidth
      data-cy={`input-${name}`}
      type={type}
      label={label}
      rules={rules}
      multiline={multiline}
      autoComplete={autoComplete}
      className={classes.root}
      autoFocus={autoFocus}
    >
      {children}
    </Controller>
  );
};

ControlledTextField.propTypes = {
  name: string.isRequired,
  children: node,
  type: oneOf(['text', 'username', 'password']),
  formControl: shape({
    control: shape({}),
    errors: shape({}),
  }).isRequired,
  label: string,
  rules: shape({}),
  multiline: bool,
  autoComplete: string,
  autoFocus: bool,
};

ControlledTextField.defaultProps = {
  type: 'text',
  children: null,
  label: null,
  multiline: false,
  rules: null,
  autoComplete: null,
  autoFocus: false,
};

export default ControlledTextField;
