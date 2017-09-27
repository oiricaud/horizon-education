import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import {DialogTitle} from "../../node_modules/material-ui/Dialog/index";
import {List} from "../../node_modules/material-ui/index";
import LearnMore from '../components/learn-more.jsx';
import {ListItem} from "../../node_modules/material-ui/List/index";

const styles = theme => ({
    root: {
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
                <DialogTitle>Network Administrator (IT)</DialogTitle>
                <div>
                    <List>
                        <h1> here {this.props.title} </h1>
                    </List>
                </div>
            </Dialog>
        );
    }
}

class Bleh extends React.Component {
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
        return (
            <div className={classes.root}>
                <Button dense color="primary" onClick={this.handleClickOpen}>Learn More</Button>
                <SimpleDialogWrapped
                    open={this.state.open}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        );
    }
}

Bleh.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bleh);