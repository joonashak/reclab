import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

const ControlledTextField = ({
  formControl, name, children, type, label, rules, multiline, autoComplete,
}) => {
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
    >
      {children}
    </Controller>
  );
};

ControlledTextField.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  type: PropTypes.oneOf(['text', 'username', 'password']),
  formControl: PropTypes.shape({
    control: PropTypes.shape({}),
    errors: PropTypes.shape({}),
  }).isRequired,
  label: PropTypes.string,
  rules: PropTypes.shape({}),
  multiline: PropTypes.bool,
  autoComplete: PropTypes.string,
};

ControlledTextField.defaultProps = {
  type: 'text',
  children: null,
  label: null,
  multiline: false,
  rules: null,
  autoComplete: null,
};

export default ControlledTextField;
