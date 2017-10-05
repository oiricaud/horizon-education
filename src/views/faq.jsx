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
});


let Questions = React.createClass({
    render: function () {
        const classes = this.props.classes;
        var questions = ["Are the courses taken at Horizon Education transferable to another institution?",
            "Are the courses taken at Horizon Education transferable to another institution?",
            "What Certifications are included in the Program?",
            "What is a Medical Billing and Office Procedure?",
            "What is a Network Administrator?",
            "What is a Medical Assistant?",
            "What is a Criminal Justice?",
            "Who pays for my Certifications?",
            "Are these Certifications Nation-Wide Certifications?",
            "Where can I work after graduations?",
            "What kind of compensation will I get after graduation?"];

        var answers = ["Are the courses taken at Horizon Education transferable to another institution?",
            "Are the courses taken at Horizon Education transferable to another institution?",
            "What Certifications are included in the Program?",
            "What is a Medical Billing and Office Procedure?",
            "What is a Network Administrator?",
            "What is a Medical Assistant?",
            "What is a Criminal Justice?",
            "Who pays for my Certifications?",
            "Are these Certifications Nation-Wide Certifications?",
            "Where can I work after graduations?",
            "What kind of compensation will I get after graduation?"];

        return (
            <div>
                {questions.map(function (questions, index) {
                    return (
                        <div style={{
                            marginTop: 20,
                            padding: 16,
                            textAlign: 'left'
                        }}>
                            <Grid item xs={12}>
                                <Button raised color="accent">
                                    {questions}
                                    <ArrowDownward/>
                                </Button>
                            </Grid>
                        </div>
                    )
                })}
            </div>
        );
    }
});

let Results = React.createClass({
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

let More = React.createClass({
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
                            <Questions/>
                            <Grid item xs={12}>
                                <More/>
                            </Grid>
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