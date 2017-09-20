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
        maxWidth: 1500,
        cellHeight: 'auto',
    },
    subheader: {
        width: '100%',
    },
    quote:{
        color: 'deepskyblue',
        fontSize: 24,
        marginTop: 50,
        marginLeft:20,
        textAlign: 'center',
    }
});

const tileData = [
    {
        img: process.env.PUBLIC_URL + './haircuts/sm-student1.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
];
function ImageGridList(props) {
    const classes = props.classes;

    return (
        <div className={classes.root}>
            <GridList cellHeight={500} className={classes.gridList} cols={1}>
            {tileData.map(tile => (
                <GridListTile key={tile.img} cols={tile.cols || 1 }>
                    <img src={tile.img} alt={tile.title} />
                </GridListTile>

            ))}
            {tileData.map(tile => (
                <GridListTile key={tile.img} cols={tile.cols || 1 }>
                    <h1 className={classes.quote} > "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better." </h1>
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