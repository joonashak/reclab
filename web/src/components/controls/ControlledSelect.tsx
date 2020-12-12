import React from 'react';
import {
  arrayOf, oneOf, shape, string,
} from 'prop-types';
import { Controller } from 'react-hook-form';
import { MenuItem, TextField } from '@material-ui/core';

const ControlledSelect = ({
  formControl, name, options, type, label, rules,
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
      select
    >
      {options.map((option) => (
        <MenuItem
          key={option.key}
          value={option.value}
        >
          {option.label}
        </MenuItem>
      ))}
    </Controller>
  );
};

ControlledSelect.propTypes = {
  name: string.isRequired,
  type: oneOf(['text', 'username', 'password']),
  formControl: shape({
    control: shape({}),
    errors: shape({}),
  }).isRequired,
  label: string,
  rules: shape({}),
  options: arrayOf(shape({
    value: string.isRequired,
    label: string.isRequired,
    key: string.isRequired,
  })).isRequired,
};

ControlledSelect.defaultProps = {
  type: 'text',
  label: null,
  rules: null,
};

export default ControlledSelect;
