import React, { useEffect, useState } from 'react';
import { func } from 'prop-types';
import {
  FormControl, InputLabel, MenuItem, Select,
} from '@material-ui/core';

const FilterPages = ({ setFilterFn }) => {
  const [value, setValue] = useState('Both');

  const options = [
    {
      name: 'Both',
      filterFn: () => true,
    },
    {
      name: 'English',
      filterFn: (page) => page.language === 'en',
    },
    {
      name: 'Finnish',
      filterFn: (page) => page.language === 'fi',
    },
  ];

  const onChange = (event) => setValue(event.target.value);

  useEffect(() => {
    const { filterFn } = options.find((option) => option.name === value);
    setFilterFn(() => filterFn);
  }, [value]);

  return (
    <FormControl variant="outlined">
      <InputLabel id="filter-pages-label">Language</InputLabel>
      <Select
        labelId="filter-pages-label"
        value={value}
        onChange={onChange}
        label="Language"
      >
        {options.map(({ name }) => <MenuItem key={name} value={name}>{name}</MenuItem>)}
      </Select>
    </FormControl>
  );
};

FilterPages.propTypes = {
  setFilterFn: func.isRequired,
};

export default FilterPages;
