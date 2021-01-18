import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from './Card';
import Bar from './Bar';
import CarouselHours from './CarouselHours';
import Days from './Days';
import ScheduleButton from './ScheduleButton';


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
  
          

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
              
              <Bar />  
            
          </Grid>
          
          <Grid item xs={4}>
            
              <Card />  
            
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>

              <Days />
              
              <CarouselHours />
              
              <ScheduleButton />

            </Paper>
          </Grid>
        </Grid>
      </div>
          
    
  );
}

export default App;