// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto'
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor:'#24292e',
        color:'#fff',
        textAlign: 'center',
    },
});

function Footer(props) {
    const classes = props.classes;
    var style = {
        backgroundColor: "#24292e",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
    };

    var phantom = {
        display: 'block',
        height: '60px',
        width: '100%',
    };
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                <div className={classes.root}>
                    <h5> Main Campus
                        14476 N. Horizon Blvd
                        Suite H
                        Horizon City, Texas 79929 </h5>
                </div>
            </div>
        </div>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);