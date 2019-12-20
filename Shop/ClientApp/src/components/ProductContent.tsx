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
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Comment from './Comment'
import { withStyles, FormControl, makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import axios from "axios";

interface IFilterProps {
  classes: any;
  data: any;
  comments: [];
}

class ProductContent extends React.Component<IFilterProps> {
    public componentDidMount() {
      
    }
      
    public componentDidUpdate() {
          
    }

    public render() {
        const { classes } = this.props;
        // const { data, comments } = this.props
        const data = {name: "name",
                      description: "desc"}
        const comments = [{name: "a", description: "bbbb"}, {name: "b", description: "aaaa"}]
        return (
            <Card>
                <CardHeader title={data.name} />
                <CardMedia
                  className={classes.media}
                  title="product image"
               />
               <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                      {data.description}
                  </Typography>
               </CardContent>
        <CardContent>
          {comments.map(c => {
            <Comment data={c}/>
          })}
        </CardContent>
            </Card>
        );
      }
}

export default withStyles(style)(ProductContent);