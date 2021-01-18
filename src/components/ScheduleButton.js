import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const styles = theme => ({
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  input: {
    display: 'none',
  },
});

function ScheduleButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button type="submit" variant="contained" size="small" color="secondary">
        <AccessTimeIcon className={classNames(classes.danger, classes.leftIcon, classes.iconSmall)} />
        Agendar Visita
      </Button>
    </div>
  );
}

ScheduleButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScheduleButton);