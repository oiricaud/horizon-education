// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile } from 'material-ui/GridList';
import Card from "../../node_modules/material-ui/Card/Card";
import {CardActions, CardContent, CardMedia} from "../../node_modules/material-ui/Card/index";
import {
    AppBar, Button, Divider, Grid, IconButton, List, Paper, Toolbar,
    Typography
} from "../../node_modules/material-ui/index";
import {ListItem, ListItemText} from "../../node_modules/material-ui/List/index";
import classes from "../../node_modules/material-ui/styles/zIndex";
import CloseIcon from 'material-ui-icons/Close';

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },
    card: {
        maxWidth: 550,
    },
    media: {
        height: 200,
    },
    gridList: {
        paddingTop: 50,
        width: 1150,
        cellHeight: '100%',
    },
    subheader: {
        width: '100%',
        height: '100%',
    },
    quote:{
        color: 'deepskyblue',
        fontSize: 36,
        margin: 50,
        textAlign: 'left',
    },
    cards:{
        marginTop: 30,
        marginBottom: 10,
    },
});

const tileDataFirstRow = [
    {
        img: process.env.PUBLIC_URL + './students/student1.jpg',
        title: 'Image',
        author: 'author',
        cols: 0,
    },
];

const tileDataSecondRow = [
    {
        img: process.env.PUBLIC_URL + './students/lg-student2.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
];

function ImageGridList(props) {
    const classes = props.classes
    return (
        <div className={classes.root}>


        </div>
    );
}

ImageGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);