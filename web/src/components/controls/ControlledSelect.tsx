import React from 'react';
import PropTypes from 'prop-types';
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
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'username', 'password']),
  formControl: PropTypes.shape({
    control: PropTypes.shape({}),
    errors: PropTypes.shape({}),
  }).isRequired,
  label: PropTypes.string,
  rules: PropTypes.shape({}).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  })).isRequired,
};

ControlledSelect.defaultProps = {
  type: 'text',
  label: null,
};

export default ControlledSelect;
