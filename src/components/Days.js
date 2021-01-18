import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
 large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    borderRadius: "50%",
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
      <div>
          <h4>Janeiro / 2021</h4>
        <div className={classes.root}>
            <Chip alt="Remy Sharp" src="" label='Seg 18'  className={classes.large} />
            <Chip alt="Remy Sharp" src="" label='Ter 19' className={classes.large} />
            <Chip alt="Remy Sharp" src="" label='Qua 20' className={classes.large} />
            <Chip alt="Remy Sharp" src="" label='Qui 21' className={classes.large} />
            <Chip alt="Remy Sharp" src="" label='Sex 22' className={classes.large} />
            <Chip alt="Remy Sharp" src="" label='Sab 23' className={classes.large} />
        </div>
      </div>
  );
}
