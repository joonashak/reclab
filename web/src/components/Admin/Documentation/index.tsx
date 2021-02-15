import React from 'react';
import { string } from 'prop-types';

const Documentation = () => {
  console.log('asd');

  return (
    <div>
      the docs
    </div>
  );
};

Documentation.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  path: string.isRequired,
};

export default Documentation;
