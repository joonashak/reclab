import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

const ControlledTextField = ({
  formControl, name, children, type,
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
};

ControlledTextField.defaultProps = {
  type: 'text',
  children: null,
};

export default ControlledTextField;
