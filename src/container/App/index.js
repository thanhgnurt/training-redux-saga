import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Taskboard from './Taskboard/index';
import theme from './../../commons/Theme';
import styles from './styles'
import { withStyles } from '@material-ui/core';





class App extends Component {
  render() {
    
    return (
      <ThemeProvider theme = {theme}>
       <Taskboard/>
      </ThemeProvider>
      
    )
  }
}


export default  withStyles(styles)(App);
