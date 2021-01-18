import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Schedule from './Schedule';

const useStyles = makeStyles((theme) => ({
  
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
        <div className='container'>
          <Schedule />
        </div>
    </div>
  );
}

export default App;