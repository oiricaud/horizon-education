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


const styles = theme => ({

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
        return (
            <div>
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
                                        Close
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
};

export default withStyles(styles)(QuestionsAndAnswers);
