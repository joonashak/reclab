import React from 'react';
import { string } from 'prop-types';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import ContentPanelSharedLayout from '../common/ContentPanel/ContentPanelSharedLayout';
import ContentPanel from '../common/ContentPanel/index';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    ...theme.typography.body1,
    backgroundColor: theme.palette.secondary.dark,
  },
  quote: {
    padding: theme.spacing(1),
    fontStyle: 'italic',
  },
  author: {
    padding: theme.spacing(0, 1, 1, 1),
    textAlign: 'right',
    fontWeight: 400,
  },
  spacingPanelUpper: {
    height: theme.spacing(1),
  },
  spacingPanelLower: {
    height: theme.spacing(3),
  },
  icon: {
    fontSize: 200,
  },
  contentPanel: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const Blockquote = ({ quote, author }) => {
  const classes = useStyles();

  return (
    <>
      <ContentPanel className={classes.spacingPanelUpper} />
      <ContentPanelSharedLayout
        className={classes.root}
        contentPanelClassName={classes.contentPanel}
        sidePanelContent={<FormatQuoteIcon className={classes.icon} />}
      >
        <div>
          <div className={classes.quote}>{quote}</div>
          {author && (
          <div className={classes.author}>
            –&nbsp;
            {author}
          </div>
          )}
        </div>
      </ContentPanelSharedLayout>
      <ContentPanel className={classes.spacingPanelLower} />
    </>
  );
};

Blockquote.propTypes = {
  quote: string.isRequired,
  author: string,
};

Blockquote.defaultProps = {
  author: null,
};

export default Blockquote;
