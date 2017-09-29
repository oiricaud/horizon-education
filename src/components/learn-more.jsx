import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import {DialogTitle} from "../../node_modules/material-ui/Dialog/index";
import {List, Typography} from "../../node_modules/material-ui/index";
import LearnMore from '../components/learn-more.jsx';
import {ListItem} from "../../node_modules/material-ui/List/index";
import Card from "../../node_modules/material-ui/Card/Card";
import {CardContent, CardMedia} from "../../node_modules/material-ui/Card/index";

const styles = theme => ({
    root: {
    },
    appBar: {
        position: 'relative',
        backgroundColor: 'cadetblue',
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
        marginLeft: theme.spacing.unit  * 3,
        marginRight: theme.spacing.unit  * 3,
        maxWidth: 250
    },
});



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
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Button dense color="primary" onClick={this.handleClickOpen}>Learn More</Button>
                <Dialog onRequestClose={this.handleRequestClose} open={this.state.open}>
                    <DialogTitle>{this.props.title} </DialogTitle>
                    <div>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={this.props.image}
                                title={this.props.title}
                            />
                            <CardContent
                                className={classes.cardcontent}>
                                <Typography type="headline" component="h2"> {this.props.title} </Typography>
                                <Typography component="p"> {this.props.info} </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </Dialog>

            </div>
        );
    }
}

Bleh.propTypes = {
    classes: PropTypes.object.isRequired,
    title: React.PropTypes.func,
    info: React.PropTypes.func,
    image: React.PropTypes.func,
};

export default withStyles(styles)(Bleh);