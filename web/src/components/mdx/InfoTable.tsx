import React from 'react';
import { node, string } from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    margin: '2rem 3rem',
    borderCollapse: 'collapse',
    boxShadow: '2px 2px 2px #00000091',
    '& td': {
      border: '1px solid #9d27da',
      padding: '6px 11px',
    },
  },
});

const InfoTable = ({ children, title }) => {
  const classes = useStyles();

  return (
    <>
      {title && <Typography variant="h4">{title}</Typography>}
      <table className={classes.table}>{children}</table>
    </>
  );
};

InfoTable.propTypes = {
  children: node.isRequired,
  title: string,
};

InfoTable.defaultProps = {
  title: null,
};

export default InfoTable;
