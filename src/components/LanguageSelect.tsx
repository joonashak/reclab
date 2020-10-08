import { MenuItem, TextField } from '@material-ui/core';
import React from 'react';

export default () => (
  <TextField id="language-select" label="Language" value="fi" select>
    <MenuItem value="fi">Suomi</MenuItem>
    <MenuItem value="en">English</MenuItem>
  </TextField>
);
