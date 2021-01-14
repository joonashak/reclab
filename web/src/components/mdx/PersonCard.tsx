import React from 'react';
import { string, node } from 'prop-types';
import {
  Card, CardContent, CardHeader, makeStyles,
} from '@material-ui/core';
import Image from './Image/index';

const useStyles = makeStyles({
  card: {
    width: '30%',
    backgroundColor: '#f5daf5',
  },
  image: {
    width: '50%',
  },
  content: {
    '&>p': {
      fontSize: 17,
      margin: '10px 22px',
    },
  },
});

const PersonCard = ({
  name, image, title, children,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader title={name} subheader={title} />
      <Image src={image} className={classes.image} />
      <CardContent className={classes.content}>
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
