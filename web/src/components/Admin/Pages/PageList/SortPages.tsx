import React, { useEffect, useState } from 'react';
import { func } from 'prop-types';
import {
  FormControl, InputLabel, MenuItem, Select,
} from '@material-ui/core';

const SortPages = ({ setSortFn }) => {
  const [value, setValue] = useState('Title Ascending');

  const options = [
    {
      name: 'Title Ascending',
      sortFn: (a, b) => a.title.localeCompare(b.title),
    },
    {
      name: 'Title Descending',
      sortFn: (a, b) => b.title.localeCompare(a.title),
    },
  ];

  const onChange = (event) => setValue(event.target.value);

  useEffect(() => {
    const { sortFn } = options.find((option) => option.name === value);
    setSortFn(() => sortFn);
  }, [value]);

  return (
    <FormControl variant="outlined">
      <InputLabel id="sort-pages-label">Sort By</InputLabel>
      <Select
        labelId="sort-pages-label"
        value={value}
        onChange={onChange}
        label="Sort By"
        data-cy="sort-pages"
      >
        {options.map(({ name }) => <MenuItem key={name} value={name}>{name}</MenuItem>)}
      </Select>
    </FormControl>
  );
};

SortPages.propTypes = {
  setSortFn: func.isRequired,
};

export default SortPages;
