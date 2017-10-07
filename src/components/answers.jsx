import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "../../node_modules/material-ui/Dialog/index";
import {Grid} from "../../node_modules/material-ui/index";
import ArrowDownward from 'material-ui-icons/KeyboardArrowDown';

let MediaReact = require('react-media');
const styles = theme => ({
    root: {},
    appBar: {
        position: 'relative',
        backgroundColor: 'cadetblue',
    },
    card: {
        maxWidth: 550,
    },
    cards: {
        marginTop: 30,
        marginBottom: 40,
        marginLeft: 5,
        marginRight: 5,
    },
    media: {
        height: 200,
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
        maxWidth: 250
    },
    information: {
        overflowY: 'scroll',
        maxHeight: 130,
    }
});

class QuestionsAndAnswers extends React.Component {
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
            <div className={classes.buttonContent}>
                <Grid container spacing={40}>
                    <div style={{marginTop: 20, padding: 16, textAlign: 'left'}}>
                        <Grid item xs={12}>
                            <Button onClick={this.handleClickOpen} raised color="accent">
                                {this.props.question}
                                <ArrowDownward/>
                            </Button>
                            <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
                                <DialogTitle>{this.props.question}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        {this.props.answer}
                                    </DialogContentText>
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
                        </Grid>
                    </div>
                </Grid>
            </div>
        );
    }
}

QuestionsAndAnswers.propTypes = {
    classes: PropTypes.object.isRequired,
    questions: React.PropTypes.func,
    answers: React.PropTypes.func,
};

export default withStyles(styles)(QuestionsAndAnswers);
