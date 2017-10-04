import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';
import TextField from "../../node_modules/material-ui/TextField/TextField";
import {CardActions, CardContent, CardMedia} from "../../node_modules/material-ui/Card/index";
import {DialogTitle} from "../../node_modules/material-ui/Dialog/index";
import {List} from "../../node_modules/material-ui/index";
import LearnMore from '../components/learn-more.jsx';
import Card from "../../node_modules/material-ui/Card/Card";

let MediaReact = require('react-media');
const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        width: '100%',
    },
    appBar: {
        position: 'relative',
        backgroundColor: 'cadetblue',
    },
    flex: {
        flex: 1,
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    textField: {
        marginLeft: theme.spacing.unit  * 3,
        marginRight: theme.spacing.unit  * 3,
        maxWidth: 250
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
    cardcontent:{
        maxHeight: 120,
    },

});

class SimpleDialog extends React.Component {
    handleRequestClose = () => {
        this.props.onRequestClose(this.props.selectedValue);
    };

    handleListItemClick = value => {
        this.props.onRequestClose(value);
    };

    render() {
        const { classes, onRequestClose, selectedValue, ...other } = this.props;

        return (
            <Dialog onRequestClose={this.handleRequestClose} {...other}>
                <DialogTitle>Set backup account</DialogTitle>
                <div>
                    <List>
                    </List>
                </div>
            </Dialog>
        );
    }
}

class FullScreenDialog extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };
    SimpleDialog = {
        classes: PropTypes.object.isRequired,
        onRequestClose: PropTypes.func,
        selectedValue: PropTypes.string,
    };
    render() {
        const { classes } = this.props;
        const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

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
                                    className={classes.cardcontent}>
                                    <Typography type="headline" component="h2"> {this.props.title} </Typography>
                                    <Typography component="p" customLength={2}> {shorterInfo(this.props.info) + '...'} </Typography>
                                </CardContent>
                            ) : (
                            <div>
                                <CardContent
                                    className={classes.cardcontent}>
                                    <Typography type="headline" component="h2"> {this.props.title} </Typography>
                                    <Typography component="p" customLength={2}> {shortInfo(this.props.info) + '...'} </Typography>
                                </CardContent>
                            </div>
                            )}
                    </MediaReact>
                        <CardActions>
                            <Button  dense color="primary"  onClick={this.handleClickOpen}>
                                Enroll
                            </Button>
                        <Dialog
                            fullScreen
                            open={this.state.open}
                            onRequestClose={this.handleRequestClose}
                            transition={<Slide direction="up" />}
                        >
                        <div>
                            <AppBar className={classes.appBar}>
                                <Toolbar>
                                    <IconButton color="contrast" onClick={this.handleRequestClose} aria-label="Close">
                                        <CloseIcon />
                                    </IconButton>
                                    <Typography type="title" color="inherit" className={classes.flex}>
                                        Enroll
                                    </Typography>
                                    <Button color="contrast" onClick={this.handleRequestClose}>
                                        Submit
                                    </Button>
                                </Toolbar>
                            </AppBar>
                            <form className={classes.container} noValidate autoComplete="off">
                                <TextField
                                    id="firstName"
                                    label="First Name"
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <TextField
                                    id="lastName"
                                    label="Last Name"
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <TextField
                                    id="initial"
                                    label="Initial"
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <TextField
                                    id="address"
                                    label="Address"
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <TextField
                                    id="city"
                                    label="City"
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <TextField
                                    id="state"
                                    label="State"
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <TextField
                                    id="zip"
                                    label="Zip"
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    id="emailAddress"
                                    label="Email Address"
                                    defaultValue=""
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <TextField
                                    id="phoneNumber"
                                    label="Phone Number"
                                    multiline
                                    rowsMax="4"
                                    value={this.state.multiline}
                                    onChange={this.handleChangeMultiline}
                                    className={classes.textField}
                                    margin="normal"
                                />
                            </form>
                        </div>
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

FullScreenDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    title: React.PropTypes.func,
    info: React.PropTypes.func,
    image: React.PropTypes.func,
};

export default withStyles(styles)(FullScreenDialog);