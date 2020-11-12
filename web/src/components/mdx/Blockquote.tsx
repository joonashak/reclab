import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    ...theme.typography.body1,
    backgroundColor: theme.palette.grey[500],
    margin: theme.spacing(1),
  },
  quote: {
    padding: theme.spacing(1),
    fontStyle: 'italic',
  },
  author: {
    padding: theme.spacing(1),
    textAlign: 'right',
  },
}));

const Blockquote = ({ quote, author }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.quote}>{quote}</div>
      {author && <div className={classes.author}>{author}</div>}
    </div>
  );
};

Blockquote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string,
};

Blockquote.defaultProps = {
  author: null,
};

export default Blockquote;
