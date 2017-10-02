import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {Paper, Typography} from "../../node_modules/material-ui/index";
// using ES modules
import {Circle, Gmaps, InfoWindow, Marker} from 'react-gmaps';

const coords = {
    lat: 31.6822916,
    lng: -106.1845318
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


    paperSmall: theme.mixins.gutters({
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
    },
    header:{
        fontWeight: 300,
        marginTop: 20,
        fontSize: 30,
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
                                <div>
                                    <Typography type="title" className={classes.header}> Directions </Typography>
                                </div>
                                <div  className={classes.hoursSmall}>
                                    <Gmaps
                                        width={'100%'}
                                        height={'450px'}
                                        lat={coords.lat}
                                        lng={coords.lng}
                                        zoom={15}
                                        loadingMessage={'Loading...'}
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
                                            content={'Horizon Education Main Campus'}
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

                                <div>
                                    <Typography type="title" className={classes.header}> Directions </Typography>
                                </div>
                                <div  className={classes.hoursLarge}>
                                    <Gmaps
                                        width={'100%'}
                                        height={'600px'}
                                        lat={coords.lat}
                                        lng={coords.lng}
                                        zoom={16}
                                        loadingMessage={'Loading...'}
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
                                            content={'Horizon Education Main Campus'}
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