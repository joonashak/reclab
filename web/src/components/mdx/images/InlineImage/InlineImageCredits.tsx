import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { InlineImageProps } from './index';

type StyleProps = {
  position: string,
}

const alignmentFromPosition = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

const useStyles = makeStyles((theme: Theme) => ({
  creditsContainer: {
    color: theme.palette.grey[700],
    fontStyle: 'italic',
    height: '50%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      order: ({ position }: StyleProps) => (position === 'center' ? 0 : 1),
      alignItems: ({ position }: StyleProps) => alignmentFromPosition[position],
      marginBottom: 0,
    },
  },
}));

const InlineImageCredits = () => {
  const { position, photoBy, editBy } = useContext(InlineImageProps);
  const classes = useStyles({ position });

  return (
    <div className={classes.creditsContainer}>
      {photoBy && (
      <div>
        {`Photo: ${photoBy}`}
      </div>
      )}
      {editBy && (
      <div>
        {`Edit: ${editBy}`}
      </div>
      )}
    </div>
  );
};

export default InlineImageCredits;
