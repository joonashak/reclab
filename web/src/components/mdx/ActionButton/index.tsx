import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { string } from 'prop-types';
import HugeActionButton from '../../controls/HugeActionButton';
import ContentPanel from '../../common/ContentPanel/index';

const palliIcon = require('./palli_inv.png');

const useStyles = makeStyles((theme: Theme) => ({
  actionButtons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: '5rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      '& > button': {
        marginBottom: '1rem',
        width: '100%',
      },
    },
  },
  contentPanel: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

const ActionButton = ({ to, title }) => {
  const classes = useStyles();

  return (
    <ContentPanel contentPanelClassName={classes.contentPanel}>
      <HugeActionButton
        to={to}
        title={title}
        iconSrc={palliIcon}
      />
    </ContentPanel>
  );
};

ActionButton.propTypes = {
  to: string.isRequired,
  title: string.isRequired,
};

export default ActionButton;
