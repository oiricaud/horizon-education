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

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
    textField: {
        paddingTop: 8,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        width: 200,
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
            <div>
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
        );
    }
}

FullScreenDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);