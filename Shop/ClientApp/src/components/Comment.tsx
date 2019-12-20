import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import React from 'react';
import classNames from "classnames"
import style from "./style"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { withStyles, FormControl, makeStyles, Theme, createStyles, Typography } from '@material-ui/core';

interface IFilterProps {
  classes: any;
  data: any;
}

class Comment extends React.Component<IFilterProps> {
    public componentDidMount() {
        
    }
    
      
    public componentDidUpdate() {
          
    }

    public render() {
        const { classes, data } = this.props;
        
        return (
          <Card>
              <CardHeader title={data.name} />
             <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {data.description}
                </Typography>
             </CardContent>
          </Card>
        );
      }
}

export default withStyles(style)(Comment);