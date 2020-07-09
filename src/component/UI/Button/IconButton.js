import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
const style = {
    background: '#2979ff',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 36,
    padding: '0 15px',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.12)',
};
export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      <Button
        variant="contained"
        color="default"
        style = {style}
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
    </div>
  );
}
