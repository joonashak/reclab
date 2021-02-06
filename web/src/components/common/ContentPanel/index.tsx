import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { node } from 'prop-types';
import ContentPanelSharedLayout from './ContentPanelSharedLayout';

const useStyles = makeStyles({
  sidePanel: {
    backgroundColor: '#F1E0FE',
  },
});

/**
 * Container for typograhical content. Forms the base layout of the page.
 */
const ContentPanel = ({ children, sidePanelContent }) => {
  const classes = useStyles();

  return (
    <ContentPanelSharedLayout
      sidePanelContent={sidePanelContent}
      sidePanelClassName={classes.sidePanel}
    >
      {children}
    </ContentPanelSharedLayout>
  );
};

ContentPanel.propTypes = {
  /** Main content to be displayed. */
  children: node.isRequired,
  /**
   * Side panel content.
   *
   * CAUTION: Not shown on the mobile layout.
   */
  sidePanelContent: node,
};

ContentPanel.defaultProps = {
  sidePanelContent: null,
};

export default ContentPanel;
