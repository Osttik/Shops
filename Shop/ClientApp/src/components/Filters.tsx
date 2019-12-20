import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import React from 'react';
import classNames from "classnames"
import style from "./style"
import { withStyles, FormControl, makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

interface IFilterProps {
  classes: any;
  onSortChange: any;
  onFilterChange: any;
}

class Filters extends React.Component<IFilterProps> {
    public componentDidMount() {
        
    }
    
      
    public componentDidUpdate() {
          
    }

    public render() {
        const { classes, onSortChange, onFilterChange } = this.props;
        
        return (
          <FormControl>
            <Grid container>
              <InputLabel id="sort_by">Sort by</InputLabel>
              <Select
                id="sort_by"
                className = {classes.departmentSelect}
                onChange = {onSortChange}
              >
                <MenuItem value={0}>Name</MenuItem>
                <MenuItem value={1}>Cost</MenuItem>
                <MenuItem value={2}>Rating</MenuItem>
              </Select>

              <InputLabel id="filter_by" className = {classes.data}>Filter by</InputLabel>
              <Select
                id="filter_by"
                className = {classes.departmentSelect}
                onChange = {onFilterChange}
              >
                <MenuItem value={0}>Big</MenuItem>
                <MenuItem value={1}>Small</MenuItem>
              </Select>
            </Grid>
          </FormControl>
        );
      }
}

export default withStyles(style)(Filters);