// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile } from 'material-ui/GridList';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },
    gridList: {
        paddingTop: 50,
        width: 1500,
        cellHeight: 'auto',
    },
    subheader: {
        width: '100%',
    },
});

const tileData = [
    {
        img: process.env.PUBLIC_URL + './haircuts/haircut1.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: process.env.PUBLIC_URL + './haircuts/haircut3.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: process.env.PUBLIC_URL + './haircuts/haircut4.jpg',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: process.env.PUBLIC_URL + './haircuts/haircut5.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: process.env.PUBLIC_URL + './haircuts/haircut6.jpg',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
];
function ImageGridList(props) {
    const classes = props.classes;

    return (
        <div className={classes.root}>
            <GridList cellHeight={300} className={classes.gridList} cols={1}>
                {tileData.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols || 1 || 2}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

ImageGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);