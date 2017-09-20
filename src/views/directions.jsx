import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {CardActions, CardContent, CardMedia} from "../../node_modules/material-ui/Card/index";
import {Button, Grid, Paper, Typography} from "../../node_modules/material-ui/index";
// using ES modules
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
    lat: 31.82340889999999,
    lng: -106.52476109999998
};

const params = {v: '3.exp', key: 'AIzaSyCsToWIw_h81_6izX--bdkEEkBtcPMJBWs'};

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
        backgroundColor: 'indianred',
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
        backgroundColor: 'indianred',
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
        color: '#FAFAFA'
    }
});

class Directions extends Component {
    onMapCreated(map) {
        map.setOptions({
            disableDefaultUI: true
        });
    }

    onDragEnd(e) {
        console.log('onDragEnd', e);
    }

    onCloseClick() {
        console.log('onCloseClick');
    }

    onClick(e) {
        console.log('onClick', e);
    }
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
                                    image="https://unsplash.it/500/350"
                                    title="Mountains banner"
                                />
                                <div>
                                    <Typography type="title" className={classes.header}>  Directions </Typography>
                                </div>
                                <div  className={classes.hoursSmall}>
                                    <Gmaps
                                        width={'100%'}
                                        height={'450px'}
                                        lat={coords.lat}
                                        lng={coords.lng}
                                        zoom={15}
                                        loadingMessage={'Be happy'}
                                        params={params}
                                        onMapCreated={this.onMapCreated}>
                                        <Marker
                                            lat={coords.lat}
                                            lng={coords.lng}
                                            draggable={true}
                                            onDragEnd={this.onDragEnd} />
                                        <InfoWindow
                                            lat={coords.lat}
                                            lng={coords.lng}
                                            content={'HeadQuarters Hair & Apperal '}
                                            onCloseClick={this.onCloseClick} />
                                        <Circle
                                            lat={coords.lat}
                                            lng={coords.lng}
                                            radius={500}
                                            onClick={this.onClick} />
                                    </Gmaps>
                                </div>
                            </Paper>
                        </div>

                    ) : (
                        <div>
                            <Paper className={classes.paperLarge} elevation={10}>
                                <CardMedia
                                    className={classes.media}
                                    image="https://unsplash.it/2048/350"
                                    title="Mountains banner"
                                />
                                <div>
                                    <Typography type="title" className={classes.header}>  Directions </Typography>
                                </div>
                                <div  className={classes.hoursLarge}>
                                    <Gmaps
                                        width={'100%'}
                                        height={'600px'}
                                        lat={coords.lat}
                                        lng={coords.lng}
                                        zoom={16}
                                        loadingMessage={'Be happy'}
                                        params={params}
                                        onMapCreated={this.onMapCreated}>
                                        <Marker
                                            lat={coords.lat}
                                            lng={coords.lng}
                                            draggable={true}
                                            onDragEnd={this.onDragEnd} />
                                        <InfoWindow
                                            lat={coords.lat}
                                            lng={coords.lng}
                                            content={'HeadQuarters Hair & Apperal '}
                                            onCloseClick={this.onCloseClick} />
                                        <Circle
                                            lat={coords.lat}
                                            lng={coords.lng}
                                            radius={500}
                                            onClick={this.onClick} />
                                    </Gmaps>
                                </div>
                            </Paper>
                        </div>
                    )}
                </MediaReact>
            </div>
        );
    }
}


Directions.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Directions);