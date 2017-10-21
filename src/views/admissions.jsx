import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto'
import {withStyles} from 'material-ui/styles';
import {CardMedia} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

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
});

class Admissions extends Component {
    render() {
        const classes = this.props.classes;
        return (
            <div>
                <Paper className={classes.paper} elevation={10}>
                    <CardMedia
                        className={classes.banner}
                        image={process.env.PUBLIC_URL + 'banner/admissions.jpg'}
                        title="Mountains banner"
                    />
                    <div>
                        <h1> Admissions </h1>
                    </div>
                    <Typography type="body1" component="p">
                        To receive more information about our programs please call us at 915-201-1401 or 915-201-1402
                    </Typography>
                    <br></br>
                    <Typography type="body1" component="p">
                        Fax: 915-231-6034
                    </Typography>
                    <br></br>
                    <Typography type="body1" component="p">
                        email our admissions team at services@horizoneducation.edu
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
};

export default withStyles(styles)(Admissions);