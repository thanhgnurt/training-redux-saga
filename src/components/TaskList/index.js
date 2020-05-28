import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TaskItem from "./../TaskItem";

class TaskList extends Component {
  render() {
    const { classes, tasks, status } = this.props;
    return (
      <Grid item md={4} xs={12}>
        <Box mt={2} mb={2}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {tasks.map((task, index) => {
            return (
              <TaskItem task={task} index={index} status={status} key={task.id} />
            );
          })}
        </div>
      </Grid>
    );
  }
}
export default withStyles(styles)(TaskList);
