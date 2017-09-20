// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile } from 'material-ui/GridList';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },
    gridList: {
        paddingTop: 50,
        width: 1050,
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
        textAlign: 'center',
    },
});

const tileDataFirstRow = [
    {
        img: process.env.PUBLIC_URL + './students/student1.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
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
    const classes = props.classes;

    return (
        <div className={classes.root}>
            <GridList cellHeight={500} className={classes.gridList} cols={2}>
                {tileDataFirstRow.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols || 1 }>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>

                ))}
                {tileDataFirstRow.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols || 0 }>
                        <h1 className={classes.quote} >"Ever tried. Ever failed. No matter. Try again. Fail again. Fail better."</h1>
                    </GridListTile>
                ))}
            </GridList>
            <GridList cellHeight={500} className={classes.gridList} cols={2}>
                {tileDataSecondRow.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols || 0 }>
                        <h1 className={classes.quote} >"Information is not knowledge."</h1>
                    </GridListTile>
                ))}
                {tileDataSecondRow.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols || 1 }>
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