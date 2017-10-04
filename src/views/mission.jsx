import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto'
import {withStyles} from 'material-ui/styles';
import {CardMedia} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

// using CommonJS modules
let MediaReact = require('react-media');
const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },
    banner: {
        height: 350,
    },
    flex: {
        flex: 1,
    },
    paper: theme.mixins.gutters({
        paddingTop: 8,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
    }),
    gridList: {
        width: 1150,
        cellHeight: '100%',
    },
    quote: {
        color: 'deepskyblue',
        fontSize: 36,
        margin: 50,
        textAlign: 'left',
    },
    cards: {
        marginTop: 30,
        marginBottom: 40,
        marginLeft: 5,
        marginRight: 5,
    },
});

class Admissions extends Component {
    horizonEducationTile = [
        {
            img: process.env.PUBLIC_URL + './icons/horizon-education.jpg',
            title: 'Horizon Education Logo',
            cols: 1,
        },
    ];
    studentTile = [
        {
            img: process.env.PUBLIC_URL + './students/student1.jpg',
            title: 'Student 1',
            cols: 0,
        },
    ];
    groupStudentTile = [
        {
            img: process.env.PUBLIC_URL + './students/group-of-students.jpg',
            title: 'Group Of Students',
            cols: 1,
        },
    ];
    handleRequestClose = () => {
        this.setState({open: false});
    };
    handleChangeMultiline = event => {
        this.setState({
            multiline: event.target.value,
        });
    };

    render() {
        const classes = this.props.classes;

        return (
            <div>
                <Paper className={classes.paper} elevation={10}>
                    <CardMedia
                        className={classes.banner}
                        image={process.env.PUBLIC_URL + 'banner/mission.jpg'}
                        title="Mountains banner"
                    />
                    <div>
                        <h1> Mission </h1>
                    </div>
                    <Typography type="body1" component="p">
                        Horizon Education is from the community, for the community. Horizon Education is on a mission to
                        provide high quality education to help students actively seeking education to increase, improve,
                        and develop their skills to obtain employment and career success. Committed to helping the
                        community
                        by increasing the employment rate with highly trained professionals will make an improved
                        successful community.
                    </Typography>
                    <br></br>
                    <Typography type="body1" component="p">
                        As our era is in a fast and accelerated change phase in the career fields, Horizon Education
                        recognizes it, it takes the responsibility to provide and prepare its students for any upcoming
                        changes in the career field of choice by guiding the students, and providing high quality
                        education related to the career field of choice.
                    </Typography>
                    <div className={classes.root}>
                    </div>
                </Paper>
            </div>
        );
    }
}

Admissions.propTypes = {
    classes: PropTypes.object.isRequired,
    title: React.PropTypes.func,
};

export default withStyles(styles)(Admissions);