import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { node, string } from 'prop-types';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  sidePanel: {
    width: 300,
    minWidth: 300,
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

/**
 * Shared layout for unified column styles.
 */
const ContentPanelSharedLayout = ({ children, sidePanelContent, sidePanelClassName }) => {
  const classes = useStyles();
  const sidePanelClasses = [classes.sidePanel, sidePanelClassName].join(' ');

  return (
    <div className={classes.root}>
      <div className={sidePanelClasses}>
        {sidePanelContent}
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

ContentPanelSharedLayout.propTypes = {
  /** Main content to be displayed. */
  children: node.isRequired,
  /**
   * Side panel content.
   *
   * CAUTION: Not shown on the mobile layout.
   */
  sidePanelContent: node,
  /**
   * Classes to be applied to the side panel.
   */
  sidePanelClassName: string,
};

ContentPanelSharedLayout.defaultProps = {
  sidePanelContent: null,
  sidePanelClassName: null,
};

export default ContentPanelSharedLayout;
