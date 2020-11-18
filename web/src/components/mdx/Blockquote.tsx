import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    ...theme.typography.body1,
    backgroundColor: deepPurple[100],
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    fontSize: '1.3rem',
    fontWeight: 100,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    boxShadow: '4px 4px 6px #004d4059',
  },
  quote: {
    padding: theme.spacing(1),
    fontStyle: 'italic',
  },
  author: {
    padding: theme.spacing(1),
    textAlign: 'right',
    fontWeight: 400,
  },
}));

const Blockquote = ({ quote, author }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.quote}>{quote}</div>
      {author && (
      <div className={classes.author}>
        –&nbsp;
        {author}
      </div>
      )}
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
