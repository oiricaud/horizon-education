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
        minHeight: '10px',
        fontWeight: '100',
        maxHeight: '32px',
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
        height: 'auto',
        width: "100%",
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '12px',

    };

    var phantom = {
        display: 'block',
        height: '30px',
        width: '100%',
    };
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                <div className={classes.root}>
                    <p> Please call us at <a href="tel:915-201-1401" style={{color: '#55b8ff'}}> 915-201-1401 </a> or
                        <a href="tel:915-201-1402" style={{color: '#55b8ff'}}> 915-201-1402 </a>
                    </p>
                </div>
                <div className={classes.root}>
                    <p> email: <a href="services@horizoneducation.edu" style={{color: '#ff4081'}}>services@horizoneducation.edu</a>
                    </p>
                </div>
                <div className={classes.root}>
                    <p> Fax: <a href="tel:915-231-6034" style={{color: '#55b8ff'}}> 915-231-6034 </a></p>
                </div>
            </div>
        </div>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);