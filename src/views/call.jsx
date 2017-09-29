import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {CardMedia} from "../../node_modules/material-ui/Card/index";
import {Grid, Paper, Typography} from "../../node_modules/material-ui/index";
// using ES modules

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
        backgroundColor: 'cornflowerblue',
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
    },

    paperLarge: theme.mixins.gutters({
        backgroundColor: 'cornflowerblue',
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
        color: '#FAFAFA',

    }
});

class Call extends Component {
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
                                    image={process.env.PUBLIC_URL + 'banner/phone.png'}
                                    title="Mountains banner"
                                />
                                <div>
                                    <Typography type="title" className={classes.header}> Phone: null  </Typography>
                                </div>
                                <div  className={classes.hoursSmall}>
                                    <Typography type="title" className={classes.header}>  Hours </Typography>
                                    <Grid container spacing={0}>
                                        <Grid item xs={6}>
                                            <Typography type="title1" className={classes.flex}> Monday </Typography>
                                            <Typography type="title1" className={classes.flex}> Tuesday </Typography>
                                            <Typography type="title1" className={classes.flex}> Wednesday </Typography>
                                            <Typography type="title1" className={classes.flex}> Thursday </Typography>
                                            <Typography type="title1" className={classes.flex}> Friday </Typography>
                                            <Typography type="title1" className={classes.flex}> Saturday </Typography>
                                            <Typography type="title1" className={classes.flex}> Sunday </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography type="title1" className={classes.flex}> null </Typography>
                                            <Typography type="title1" className={classes.flex}> null </Typography>
                                            <Typography type="title1" className={classes.flex}> null </Typography>
                                            <Typography type="title1" className={classes.flex}> null </Typography>
                                            <Typography type="title1" className={classes.flex}> null </Typography>
                                            <Typography type="title1" className={classes.flex}> null </Typography>
                                            <Typography type="title1" className={classes.flex}> null </Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Paper>
                        </div>

                    ) : (
                        <div>
                            <Paper className={classes.paperLarge} elevation={10}>
                                <CardMedia
                                    className={classes.media}
                                    image={process.env.PUBLIC_URL + 'banner/phone.png'}
                                    title="Mountains banner"
                                />
                                <div>
                                    <Typography type="title" className={classes.header}>  null </Typography>

                                </div>
                                <div  className={classes.hoursLarge}>
                                    <Typography type="title" className={classes.header}>  Hours </Typography>
                                    <Grid container spacing={0}>
                                        <Grid item xs={6}>
                                            <Typography type="title1" className={classes.flex}> Monday </Typography>
                                            <Typography type="title1" className={classes.flex}> Tuesday </Typography>
                                            <Typography type="title1" className={classes.flex}> Wednesday </Typography>
                                            <Typography type="title1" className={classes.flex}> Thursday </Typography>
                                            <Typography type="title1" className={classes.flex}> Friday </Typography>
                                            <Typography type="title1" className={classes.flex}> Saturday </Typography>
                                            <Typography type="title1" className={classes.flex}> Sunday </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography type="title1" className={classes.flex}> null </Typography>
                                            <Typography type="title1" className={classes.flex}> null </Typography>
                                            <Typography type="title1" className={classes.flex}> null </Typography>
                                            <Typography type="title1" className={classes.flex}> null </Typography>
                                            <Typography type="title1" className={classes.flex}> null </Typography>
                                            <Typography type="title1" className={classes.flex}> null </Typography>
                                            <Typography type="title1" className={classes.flex}> null </Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Paper>
                        </div>
                    )}
                </MediaReact>
            </div>
        );
    }
}


Call.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Call);