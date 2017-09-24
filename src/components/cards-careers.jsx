import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';
import TextField from "../../node_modules/material-ui/TextField/TextField";
import {CardActions} from "../../node_modules/material-ui/Card/index";

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
});

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

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
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
                    <Button dense color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </div>
        );
    }
}

FullScreenDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);