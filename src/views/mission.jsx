import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {CardMedia} from "../../node_modules/material-ui/Card/index";
import {Paper, Typography} from "../../node_modules/material-ui/index";

// using CommonJS modules
var MediaReact = require('react-media')

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },

    appBar: {
        height: 60,
    },

    media: {
        height: 300,
        marginBottom:20,
        marginTop:7,
    },
    paperSmall: theme.mixins.gutters({
        backgroundColor: 'darkcyan',
        paddingTop: 8,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
    }),
    hoursSmall:{
        paddingTop: 8,
        paddingBottom: 16,
        margin:10,
        fontWeight: 'light',
        color: 'white'
    },

    paperLarge: theme.mixins.gutters({
        backgroundColor: 'darkcyan',
        paddingTop: 8,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 10,
        marginBottom: theme.spacing.unit * 10,
        marginLeft: theme.spacing.unit * 10,
        marginRight: theme.spacing.unit * 10,
    }),
    hoursLarge:{
        paddingTop: 8,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        fontWeight: 'light',
        color: 'white'
    },
    flex: {
        flex: 1,
        fontWeight: 100,
        margin: 20,
        color: '#FAFAFA'
    },
    header:{
        fontWeight: 300,
        fontSize: 30,
        color: '#FAFAFA'
    }
});

class Hours extends Component {
    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.root}>
                <MediaReact query="(max-width: 599px)">
                    {matches => matches ? (
                        <div>
                            <Paper className={classes.paperSmall} elevation={10}>
                                <CardMedia
                                    className={classes.media}
                                    image={process.env.PUBLIC_URL + 'banner/mission.jpg'}
                                    title="Mountains banner"
                                />
                                <div>
                                    <Typography type="title" className={classes.header}> Hours </Typography>
                                </div>
                                <div  className={classes.hoursSmall}>
                                    Horizon Education is from the community, for the community. Horizon Education is on a mission to provide high quality education to help students actively seeking education to increase, improve, and develop their skills to obtain employment and career success. Committed to helping the community by increasing the employment rate with highly trained professionals will make an improved successful community.
                                    As our era is in a fast and accelerated change phase in the career fields, Horizon Education recognizes it, it takes the responsibility to provide and prepare its students for any upcoming changes in the career field of choice by guiding the students, and providing high quality education related to the career field of choice.
                                </div>
                            </Paper>
                        </div>

                    ) : (
                        <div>
                            <Paper className={classes.paperLarge} elevation={10}>
                                <CardMedia
                                    className={classes.media}
                                    image={process.env.PUBLIC_URL + 'banner/mission.jpg'}
                                    title="Mountains banner"
                                />
                                <div>
                                    <Typography type="title" className={classes.header}>  Mission </Typography>
                                </div>
                                <div  className={classes.hoursLarge}>
                                    Horizon Education is from the community, for the community. Horizon Education is on a mission to provide high quality education to help students actively seeking education to increase, improve, and develop their skills to obtain employment and career success. Committed to helping the community by increasing the employment rate with highly trained professionals will make an improved successful community.
                                    As our era is in a fast and accelerated change phase in the career fields, Horizon Education recognizes it, it takes the responsibility to provide and prepare its students for any upcoming changes in the career field of choice by guiding the students, and providing high quality education related to the career field of choice.
                                </div>
                            </Paper>
                        </div>
                    )}
                </MediaReact>
            </div>
        );
    }
}


Hours.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hours);