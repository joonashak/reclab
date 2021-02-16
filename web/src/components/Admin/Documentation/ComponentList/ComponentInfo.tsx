/* eslint-disable react/prop-types */
import React from 'react';

const ComponentInfo = ({ component }) => {
  console.log('asd');

  return (
    <div>{component.displayName}</div>
  );
};

export default ComponentInfo;
