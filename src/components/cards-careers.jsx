import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import TextField from "../../node_modules/material-ui/TextField/TextField";
import {CardActions, CardContent, CardMedia} from "../../node_modules/material-ui/Card/index";
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
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    textField: {
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        maxWidth: 250,
    },
    media: {
        height: 200,
    },
    card: {
        maxWidth: 550,
    },
    cards:{
        marginTop: 30,
        marginBottom: 40,
    },
    content: {
        maxHeight: 150,
    },
});

function setErrorMsg(error) {
    return {
        registerError: error.message
    }
}
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
                            <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
                                <DialogTitle>{'Enroll'}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        To subscribe to our newsletter, please enter your information here. We will send
                                        updates occasionally.
                                    </DialogContentText>
                                    <TextField
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="First Last Name"
                                        type="name"
                                        name="name"
                                        fullWidth
                                    />
                                    <TextField
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        autoFocus
                                        margin="dense"
                                        id="email"
                                        label="Email"
                                        type="email"
                                        name="email"
                                        fullWidth
                                    />
                                    <TextField
                                        value={this.state.address}
                                        onChange={this.handleChange}
                                        autoFocus
                                        margin="dense"
                                        id="address"
                                        label="Address"
                                        type="address"
                                        name="address"
                                        fullWidth
                                    />
                                    <TextField
                                        value={this.state.city}
                                        onChange={this.handleChange}
                                        autoFocus
                                        margin="dense"
                                        id="city"
                                        label="City, State, Zip"
                                        type="city"
                                        name="city"
                                        fullWidth
                                    />
                                    <TextField
                                        value={this.state.phoneNumber}
                                        onChange={this.handleChange}
                                        autoFocus
                                        margin="dense"
                                        id="phonenumber"
                                        label="Phone Number"
                                        type="phone"
                                        name="phoneNumber"
                                        fullWidth
                                    />
                                </DialogContent>
                                {
                                    this.state.registerError &&
                                    <div className="alert alert-danger" role="alert">
                                        <span className="glyphicon glyphicon-exclamation-sign"
                                              aria-hidden="true"></span>
                                        <span className="sr-only">Error:</span>
                                        &nbsp;{this.state.registerError}
                                    </div>
                                }
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