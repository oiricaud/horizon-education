import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto'
import {withStyles} from 'material-ui/styles';
import {CardMedia} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

// using CommonJS modules
let MediaReact = require('react-media')
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
                        image={process.env.PUBLIC_URL + 'banner/banner-3.jpg'}
                        title="Mountains banner"
                    />
                    <div>
                        <h1> Admissions </h1>
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