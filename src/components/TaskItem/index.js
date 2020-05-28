import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";

class TaskItem extends Component {
  render() {
    let { task, classes, status } = this.props;
    let { tittle, id } = task;
    return (
      <Card className={classes.card} key={id}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{tittle}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
    <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cartActions}>
          <Fab color="primary" aria-label="edit" size="small">
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab color="secondary" aria-label="delete" size="small">
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>

        </CardActions>
      </Card>
    );
  }
}
export default withStyles(styles)(TaskItem);
