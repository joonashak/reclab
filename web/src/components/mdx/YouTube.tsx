import React from 'react';
import { string } from 'prop-types';
import ReactYouTube from 'react-youtube';
import { createStyles, makeStyles } from '@material-ui/core';
import ContentPanel from '../common/ContentPanel/index';

const useStyles = makeStyles(() => createStyles({
  root: {
    width: '80%',
    margin: '2rem auto',
    // react-youtube adds a ghost <div> before the <iframe>, that's why we need this selector.
    '& div': {
      position: 'relative',
      width: '100%',
      paddingTop: '56.25%',
    },
  },
  youtube: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
}));

const YouTube = ({ videoId }) => {
  const classes = useStyles();

  return (
    <ContentPanel>
      <div className={classes.root}>
        <ReactYouTube videoId={videoId} className={classes.youtube} />
      </div>
    </ContentPanel>
  );
};

YouTube.propTypes = {
  videoId: string.isRequired,
};

export default YouTube;
