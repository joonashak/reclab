import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { node, string } from 'prop-types';
import ContentPanelSharedLayout from './ContentPanelSharedLayout';

const useStyles = makeStyles((theme: Theme) => ({
  sidePanel: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

/**
 * Container for typograhical content. Forms the base layout of the page.
 */
const ContentPanel = ({
  children, sidePanelContent, className, contentPanelClassName,
}) => {
  const classes = useStyles();

  return (
    <ContentPanelSharedLayout
      sidePanelContent={sidePanelContent}
      sidePanelClassName={classes.sidePanel}
      className={className}
      contentPanelClassName={contentPanelClassName}
    >
      {children}
    </ContentPanelSharedLayout>
  );
};

ContentPanel.propTypes = {
  /** Main content to be displayed. */
  children: node,
  /**
   * Side panel content.
   *
   * CAUTION: Not shown on the mobile layout.
   */
  sidePanelContent: node,
  /**
   * Classes to be applied to the root container.
   */
  className: string,
  /**
   * Classes to be applied to the content panel.
   */
  contentPanelClassName: string,
};

ContentPanel.defaultProps = {
  children: null,
  sidePanelContent: null,
  className: null,
  contentPanelClassName: null,
};

export default ContentPanel;
