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

let MediaReact = require('react-media');
const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        width: '100%',
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    textField: {
        marginLeft: theme.spacing.unit  * 3,
        marginRight: theme.spacing.unit  * 3,
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
        marginLeft: 5,
        marginRight: 5,
    },
    content: {
        maxHeight: 120,
    },
});

class Careers extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };

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
                            <Button dense color="primary" onClick={this.handleClickOpen}>
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
                                        autoFocus
                                        margin="dense"
                                        id="firstname"
                                        label="First Name"
                                        type="name"
                                        fullWidth
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="lastname"
                                        label="Last Name"
                                        type="name"
                                        fullWidth
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="address"
                                        label="Address"
                                        type="address"
                                        fullWidth
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="city"
                                        label="City, State, Zip"
                                        type="city"
                                        fullWidth
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="phonenumber"
                                        label="Phone Number"
                                        type="phone"
                                        fullWidth
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.handleRequestClose} color="primary">
                                        Cancel
                                    </Button>
                                    <Button onClick={this.handleRequestClose} color="primary">
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