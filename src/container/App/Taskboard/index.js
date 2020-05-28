import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { STATUSES } from "../../../constants/index.js";
import TaskList from "../../../components/TaskList/index.js";
import TaskForm from "../../../components/TaskForm";

const listTask = [
  {
    id: 1,
    tittle: "Read book",
    description: "read a novel book",
    status: 0,
  },
  {
    id: 2,
    tittle: "Play Game",
    description: "play LOL game",
    status: 2,
  },
  {
    id: 3,
    tittle: "Study english",
    description: "Study english every day",
    status: 1,
  },
];

class Taskboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  renderBroad = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          const taskFiltered = listTask.filter(
            (task) => task.status === status.value
          );
          return (
            <TaskList tasks={taskFiltered} status={status} key={status.value} />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  renderForm = () => {
    const { open } = this.state;
    return <TaskForm open={open} onClose={this.handleClose} />;
  };
  render() {
    let { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon /> Add New Job
        </Button>
        <div>
          {this.renderBroad()}
          {this.renderForm()}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Taskboard);
