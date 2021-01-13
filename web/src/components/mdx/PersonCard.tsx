import React from 'react';
import { string, node } from 'prop-types';
import {
  Card, CardContent, CardHeader, makeStyles,
} from '@material-ui/core';
import Image from './Image/index';

const useStyles = makeStyles({
  card: {
    width: '30%',
    float: 'left',
    marginRight: 20,
  },
});

const PersonCard = ({
  name, image, title, children,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader title={name} subheader={title} />
      <Image src={image} />
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

PersonCard.propTypes = {
  name: string.isRequired,
  image: string.isRequired,
  title: string.isRequired,
  children: node.isRequired,
};

export default PersonCard;
