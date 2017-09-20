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
        paddingTop: 10,
        verticalAlign: 'middle',
        textAlign: 'center',
    }
});

const tileDataFirstRow = [
    {
        img: process.env.PUBLIC_URL + './students/sm-student1.jpg',
        title: 'Image',
        author: 'author',
        rows: 0,
        cols: 0,
    },
];

const tileDataSecondRow = [
    {
        img: process.env.PUBLIC_URL + './icons/horizoneducation.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
];

const tileDataThirdRow = [
    {
        img: process.env.PUBLIC_URL + './students/sm-student2.jpg',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
];
function ImageGridList(props) {
    const classes = props.classes;

    return (
        <div className={classes.root}>
            <GridList cellHeight={175} className={classes.gridList} cols={1}>
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
                {tileDataSecondRow.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols || 1 }>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}

            </GridList>
            <GridList cellHeight={500} className={classes.gridList} cols={1}>
                {tileDataThirdRow.map(tile => (
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