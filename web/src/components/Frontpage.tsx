import React from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { makeStyles, Theme } from '@material-ui/core/styles';
import YouTube from './mdx/YouTube';
import HugeActionButton from './controls/HugeActionButton';
import LayoutWide from './LayoutWide';

const useStyles = makeStyles((theme: Theme) => ({
  tagline: {
    fontSize: '2rem',
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: 100,
    lineHeight: 'normal',
    marginTop: '3rem',
    marginBottom: '3rem',
  },
  showreel: {
    marginTop: '4rem',
    '& > div': {
      [theme.breakpoints.down('sm')]: {
        width: '100vw',
        marginLeft: -16,
        marginRight: -16,
      },
    },
  },
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
}));

export default () => {
  const classes = useStyles();
  const { i18n, t } = useTranslation();
  const { language } = i18n;

  const showButtonPath = language === 'en'
    ? '/en/one-hundred-million-percent'
    : '/fi/satamiljoonaa-prosenttia';

  return (
    <LayoutWide>
      <Typography className={classes.tagline}>
        {t('frontpage.tagline')}
      </Typography>
      <div className={classes.showreel}>
        <YouTube videoId="_y6pnvV91-A" />
      </div>
      <div className={classes.actionButtons}>
        <HugeActionButton
          to={showButtonPath}
          subtitle={t('frontpage.showButton.subtitle')}
          title={t('frontpage.showButton.title')}
          iconSrc="palli_inv.png"
        />
        <HugeActionButton
          to="https://holvi.com/shop/recover/"
          subtitle={t('frontpage.storeButton.subtitle')}
          title={t('frontpage.storeButton.title')}
          iconSrc="mask_stay_safe.png"
        />
      </div>
    </LayoutWide>
  );
};
