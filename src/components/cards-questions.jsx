import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Dialog from 'material-ui/Dialog';
import {CardContent, CardMedia} from "../../node_modules/material-ui/Card/index";
import {DialogTitle} from "../../node_modules/material-ui/Dialog/index";
import {List} from "../../node_modules/material-ui/index";


let MediaReact = require('react-media')
const styles = theme => ({
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
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
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
        const {classes, onRequestClose, selectedValue, ...other} = this.props;

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
        this.setState({open: true});
    };

    handleRequestClose = () => {
        this.setState({open: false});
    };

    render() {
        const {classes} = this.props;

        return (
            <div>
                <CardMedia
                    title={this.props.question}
                />
                <MediaReact query="(max-width: 599px)">
                    {matches => matches ? (
                        <CardContent
                            className={classes.cardcontent}>
                            <h2> {this.props.question} </h2>
                        </CardContent>
                    ) : (
                        <div>
                            <CardContent
                                className={classes.cardcontent}>
                                <h2> {this.props.question} </h2>
                            </CardContent>
                        </div>
                    )}
                </MediaReact>
            </div>
        );
    }
}

FullScreenDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    question: React.PropTypes.func,
    answer: React.PropTypes.func,
};

export default withStyles(styles)(FullScreenDialog);