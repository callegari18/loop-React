import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Chips() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      
      <Chip label="9:00" onClick={handleClick} />
      <Chip label="10:00" onClick={handleClick} />
      <Chip label="11:00" onClick={handleClick} />
      <Chip label="12:00" onClick={handleClick} />
      <Chip label="13:00" onClick={handleClick} />
      <Chip label="14:00" onClick={handleClick} />
      <Chip label="15:00" onClick={handleClick} />
      <Chip label="16:00" onClick={handleClick} />
      <Chip label="17:00" onClick={handleClick} />
      <Chip label="18:00" onClick={handleClick} />     
    
    </div>
  );
}
