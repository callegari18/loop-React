import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Logo from './img/Loop_LogoPrincipal_120px.png';
//import { blue } from '@material-ui/core/colors';

const styles = {
    bar: {
      flexGrow: 1,
    },
    menu: {
      alignSelf:'flex-end',
    },
  };
  
  function Bar(props) {
    const { classes } = props;
  
    return (
      <div className={classes.bar}>
        <AppBar position="static" color="default">
          <Toolbar>
            <img src={Logo} alt="Logo-Loop"/>
                <ButtonGroup variant="text" className={classes.menu} color="primary" aria-label="text primary button group">
                    <Button>Vender</Button>
                    <Button>Comprar</Button>
                    <Button>Loja</Button>
                </ButtonGroup>
          </Toolbar>
          
        </AppBar>
      </div>
    );
  }
  
  Bar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Bar);