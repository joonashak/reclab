import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import Image from './Image/index';

const PersonCard = ({
  name, image, title, children,
}) => (
  <Card>
    <CardHeader title={name} subheader={title} />
    <Image src={image} />
    <CardContent>
      {children}
    </CardContent>
  </Card>
);

PersonCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PersonCard;
