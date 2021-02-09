import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, Theme } from '@material-ui/core/styles';
import HugeActionButton from '../../controls/HugeActionButton';
import ContentPanel from '../../common/ContentPanel/index';

const palliIcon = require('./palli_inv.png');
const maskIcon = require('./mask_stay_safe.png');

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
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));

export default () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <ContentPanel contentPanelClassName={classes.contentPanel}>
      <HugeActionButton
        to="/en/subcase-2021"
        subtitle={t('frontpage.showButton.subtitle')}
        title={t('frontpage.showButton.title')}
        iconSrc={palliIcon}
      />
      <HugeActionButton
        to="https://holvi.com/shop/recover/"
        subtitle={t('frontpage.storeButton.subtitle')}
        title={t('frontpage.storeButton.title')}
        iconSrc={maskIcon}
      />
    </ContentPanel>
  );
};
