import React from 'react';
import { bool } from 'prop-types';
import { Avatar, ListItemAvatar } from '@material-ui/core';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  public: {
    backgroundColor: theme.palette.primary.main,
  },
}));

/**
 * Different avatar icon according to page privacy setting.
 */
const PrivacyAvatar = ({ isPublic }) => {
  const classes = useStyles();
  const avatarClasses = isPublic ? classes.public : '';

  return (
    <ListItemAvatar>
      <Avatar className={avatarClasses}>
        <InsertDriveFileIcon />
      </Avatar>
    </ListItemAvatar>
  );
};

PrivacyAvatar.propTypes = {
  isPublic: bool.isRequired,
};

export default PrivacyAvatar;
