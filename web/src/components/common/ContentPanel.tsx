import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { node } from 'prop-types';

const useStyles = makeStyles({
  sidePanel: {
    width: 300,
    backgroundColor: '#F1E0FE',
    display: 'flex',
    justifyContent: 'center',
  },
});

/**
 * Container for typograhical content.
 * Forms the base layout of the page.
 */
const ContentPanel = ({ children, sidePanelContent }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.sidePanel}>
        {sidePanelContent}
      </div>
      <div>
        {children}
      </div>
    </div>
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
