import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto'
import {withStyles} from 'material-ui/styles';
import {CardMedia} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import {Button, Grid} from "../../node_modules/material-ui/index";
import ArrowDownward from 'material-ui-icons/KeyboardArrowDown';

const styles = theme => ({
    banner: {
        height: 350,
    },
    paper: theme.mixins.gutters({
        paddingTop: 8,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
    }),
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    button: {
        margin: theme.spacing.unit,
    },
    buttonContent: {
        marginTop: 20,
        padding: 16,
        textAlign: 'left',
        color: theme.palette.text.secondary,
    }
});
var Search = React.createClass({
    getInitialState: function () {
        return {showResults: false};
    },
    onClick: function () {
        this.setState({showResults: true});
    },
    render: function () {
        return (
            <div>
                <Button raised color="primary" onClick={this.onClick}>
                    <ArrowDownward/>
                    More
                </Button>

                {this.state.showResults ? <Results/> : null}
            </div>
        );
    }
});
var Results = React.createClass({
    render: function () {
        return (
            <div>
                <Typography type="body1" component="p">
                    Fusce elementum ac sem id laoreet. Vivamus vel sollicitudin libero. Mauris eget malesuada purus.
                    Etiam condimentum arcu in ante
                    maximus rutrum. Proin consectetur a odio ut sagittis. Suspendisse viverra turpis et libero
                    facilisis scelerisque.
                </Typography>
            </div>
        );
    }
});
class Faq extends Component {

    render() {
        const classes = this.props.classes;
        return (
            <div>
                <Paper className={classes.paper} elevation={10}>
                    <CardMedia
                        className={classes.banner}
                        image={process.env.PUBLIC_URL + 'banner/faq.jpg'}
                        title="Mountains banner"
                    />
                    <div>
                        <h1> Frequently Asked Questions </h1>
                    </div>
                    <Typography type="body1" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada massa bibendum lorem
                        cursus, nec auctor tellus porttitor. Nam vel iaculis arcu. Fusce elementum enim quis arcu
                        posuere vulputate. Nunc vulputate risus elit, vitae mollis purus mollis id. Aenean eu nunc orci.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut non
                        faucibus augue, id ultricies augue. Pellentesque sit amet aliquet massa, vel laoreet arcu.
                        Aliquam faucibus sollicitudin vestibulum.
                    </Typography>
                    <br></br>
                    <Typography type="body1" component="p">
                        Donec laoreet blandit dui. Curabitur varius justo sit amet ex porta suscipit. Suspendisse vitae
                        accumsan diam. Ut euismod elementum metus feugiat egestas. Curabitur ut sapien facilisis,
                        elementum metus eu, congue metus. Suspendisse vitae dignissim urna, semper elementum odio.
                        Maecenas turpis nibh, porta sed justo ac, interdum luctus neque. Cras lacinia leo quis justo
                        euismod consequat.
                    </Typography>
                    <br></br>
                    <Typography type="body1" component="p">
                        Fusce elementum ac sem id laoreet. Vivamus vel sollicitudin libero. Mauris eget malesuada purus.
                        Etiam condimentum arcu in ante
                        maximus rutrum. Proin consectetur a odio ut sagittis. Suspendisse viverra turpis et libero
                        facilisis scelerisque.
                    </Typography>
                    <div className={classes.buttonContent}>
                        <Grid container spacing={40}>
                            <Grid item xs={12}>
                                <Button raised color="accent" onClick={this.handleClickOpen} className={classes.button}>
                                    Are the courses taken at Horizon Education transferable to another institution?
                                    <ArrowDownward/>
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button raised color="accent" onClick={this.handleClickOpen} className={classes.button}>
                                    What Certifications are included in the Program?
                                    <ArrowDownward/>
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button raised color="accent" onClick={this.handleClickOpen} className={classes.button}>
                                    What is a Medical Billing and Office Procedure?
                                    <ArrowDownward/>
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Search/>
                            </Grid>
                            {
                                /*
                                <Grid item xs={12}>
                                    <Button raised color="accent" onClick={this.handleClickOpen} className={classes.button}>
                                        What is a Network Administrator?
                                        <ArrowDownward/>
                                    </Button>
                                </Grid>

                                <Grid item xs={12}>
                                    <Button raised color="accent" onClick={this.handleClickOpen} className={classes.button}>
                                        What is a Medical Assistant?
                                        <ArrowDownward/>
                                    </Button>
                                </Grid>
                               <Grid item xs={12}>
                                    <Button raised color="accent" onClick={this.handleClickOpen} className={classes.button}>
                                        What is a Criminal Justice?
                                        <ArrowDownward/>
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button raised color="accent" onClick={this.handleClickOpen} className={classes.button}>
                                        Who pays for my Certifications?
                                        <ArrowDownward/>
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button raised color="accent" onClick={this.handleClickOpen} className={classes.button}>
                                        Are these Certifications Nation-Wide Certifications?
                                        <ArrowDownward/>
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button raised color="accent" onClick={this.handleClickOpen} className={classes.button}>
                                        Where can I work after graduations?
                                        <ArrowDownward/>
                                    </Button>
                                </Grid>

                                <Grid item xs={12}>
                                    <Button raised color="accent" onClick={this.handleClickOpen} className={classes.button}>
                                        What kind of compensation will I get after graduation?
                                        <ArrowDownward/>
                                    </Button>
                                </Grid>
                                */}
                        </Grid>
                    </div>
                </Paper>
            </div>
        );
    }
}

Faq.propTypes = {
    classes: PropTypes.object.isRequired,
    question: React.PropTypes.func,
    answer: React.PropTypes.func,
};

export default withStyles(styles)(Faq);