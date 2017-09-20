// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto'
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile } from 'material-ui/GridList';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor:'#24292e',
        color:'#fff',
        textAlign: 'center',

    },
});

function Footer(props) {
    const classes = props.classes;

    return (
        <div className={classes.root}>
            <h5> Main Campus
                14476 N. Horizon Blvd
                Suite H
                Horizon City, Texas 79929 </h5>
        </div>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);