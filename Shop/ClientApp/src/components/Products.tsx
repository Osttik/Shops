import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import React from 'react';
import classNames from "classnames"
import style from "./style"
import { withStyles, FormControl, makeStyles, Theme, createStyles } from '@material-ui/core';

interface IFilterProps {
  classes: any;
  data: [];
}

class Products extends React.Component<IFilterProps> {
    public componentDidMount() {
        
    }
    
      
    public componentDidUpdate() {
          
    }

    public render() {
        const { classes, data } = this.props;
        
        return (
          data.map(d => {

          })
        );
      }
}

export default withStyles(style)(Products);