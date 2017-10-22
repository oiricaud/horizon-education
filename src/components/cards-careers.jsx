import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import TextField from "../../node_modules/material-ui/TextField/TextField";
import {CardActions, CardContent, CardMedia} from "../../node_modules/material-ui/Card/index";
import Slide from 'material-ui/transitions/Slide';

import {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "../../node_modules/material-ui/Dialog/index";
import LearnMore from '../components/learn-more.jsx';
import Card from "../../node_modules/material-ui/Card/Card";
import {add} from '../helpers/auth'

let MediaReact = require('react-media');
const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        width: '100%',
    },
    card: {
        maxWidth: 'auto',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    media: {
        height: 200,
    },
    content: {
        maxHeight: 150,
    },
});

class Careers extends React.Component {
    state = {
        open: false,
        registerError: null,
        person: {
            name: '',
            email: '',
            address: '',
            city: '',
            phoneNumber: '',
        }
    };
    handleRequestClose = (e) => {
        this.setState({open: false});
    };
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    handleChange = (event) => {
        event.persist(); // allow native event access (see: https://facebook.github.io/react/docs/events.html)
        this.setState((state) => state.person[event.target.name] = event.target.value);
    };
    onEnrollClick = (e) => {
        e.preventDefault();
        console.log("when clicking, the form data is:");
        console.log(this.state.person);
        add(this.state.person);
        this.setState({open: false});
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        function shortInfo(info) {
            return info.substring(0, 210);
        }
        function shorterInfo(info) {
            return info.substring(0,130);
        }

        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={this.props.image}
                        title={this.props.title}
                    />
                    <MediaReact query="(max-width: 599px)">
                        {matches => matches ? (
                                <CardContent
                                    className={classes.content}>
                                    <Typography type="headline" component="h2"> {this.props.title} </Typography>
                                    <Typography component="p"> {shorterInfo(this.props.info) + '...'} </Typography>
                                </CardContent>
                            ) : (
                            <div>
                                <CardContent
                                    className={classes.content}>
                                    <Typography type="headline" component="h2"> {this.props.title} </Typography>
                                    <Typography component="p"> {shortInfo(this.props.info) + '...'} </Typography>
                                </CardContent>
                            </div>
                            )}
                    </MediaReact>
                        <CardActions>
                            <Button raised color="accent" onClick={this.handleClickOpen}>
                                Enroll
                            </Button>
                            <Dialog open={this.state.open}
                                    transition={<Slide direction="up"/>}
                                    onRequestClose={this.handleRequestClose}>
                                <DialogTitle>{'Enroll'}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        To subscribe to our newsletter, please enter your information here. We will send
                                        updates occasionally.
                                    </DialogContentText>
                                </DialogContent>
                                    <TextField
                                        defaultValue={this.state.name}
                                        onChange={this.handleChange}
                                        autoFocus
                                        className={classes.textField}
                                        margin="normal"
                                        id="name"
                                        label="First Last Name"
                                        name="name"
                                        fullWidth
                                    />
                                    <TextField
                                        defaultValue={this.state.email}
                                        onChange={this.handleChange}
                                        className={classes.textField}
                                        margin="normal"
                                        id="email"
                                        label="Email"
                                        name="email"
                                        fullWidth
                                    />
                                    <TextField
                                        defaultValue={this.state.address}
                                        onChange={this.handleChange}
                                        className={classes.textField}
                                        margin="normal"
                                        id="address"
                                        label="Address"
                                        name="address"
                                        fullWidth
                                    />
                                    <TextField
                                        defaultValue={this.state.city}
                                        onChange={this.handleChange}
                                        className={classes.textField}
                                        margin="normal"
                                        id="city"
                                        label="City, State, Zip"
                                        name="city"
                                        fullWidth
                                    />
                                    <TextField
                                        defaultValue={this.state.phoneNumber}
                                        onChange={this.handleChange}
                                        className={classes.textField}
                                        margin="normal"
                                        id="phonenumber"
                                        label="Phone Number"
                                        name="phoneNumber"
                                        fullWidth
                                    />

                                <DialogActions>
                                    <Button onClick={this.handleRequestClose} color="primary">
                                        Cancel
                                    </Button>
                                    <Button onClick={this.onEnrollClick} color="primary">
                                        Enroll
                                    </Button>

                                </DialogActions>
                            </Dialog>
                            <LearnMore
                                title={this.props.title}
                                image={this.props.image}
                                info={this.props.info}
                                onClick={this.handleRequestClose}>
                            </LearnMore>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

Careers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Careers);