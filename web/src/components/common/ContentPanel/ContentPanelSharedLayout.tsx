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
  contentPanel: {
    width: '100%',
  },
}));

/**
 * Shared layout for unified column styles.
 */
const ContentPanelSharedLayout = ({
  children, sidePanelContent, sidePanelClassName, contentPanelClassName, className,
}) => {
  const classes = useStyles();
  const rootClasses = [classes.root, className].join(' ');
  const sidePanelClasses = [classes.sidePanel, sidePanelClassName].join(' ');
  const contentPanelClasses = [classes.contentPanel, contentPanelClassName].join(' ');

  return (
    <div className={rootClasses}>
      <div className={sidePanelClasses}>
        {sidePanelContent}
      </div>
      <div className={contentPanelClasses}>
        {children}
      </div>
    </div>
  );
};

ContentPanelSharedLayout.propTypes = {
  /** Main content to be displayed. */
  children: node,
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
  /**
   * Classes to be applied to the content panel.
   */
  contentPanelClassName: string,
  /**
   * Classes to be applied to the root container.
   */
  className: string,
};

ContentPanelSharedLayout.defaultProps = {
  children: null,
  sidePanelContent: null,
  sidePanelClassName: null,
  contentPanelClassName: null,
  className: null,
};

export default ContentPanelSharedLayout;
