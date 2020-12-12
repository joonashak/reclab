import React from 'react';
import { string, node } from 'prop-types';
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
  name: string.isRequired,
  image: string.isRequired,
  title: string.isRequired,
  children: node.isRequired,
};

export default PersonCard;
