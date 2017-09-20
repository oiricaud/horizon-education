import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto'
import { withStyles } from 'material-ui/styles';
import { CardMedia } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import MyLargeTiles from '../components/large-tiles.jsx';
import MySmallTiles from '../components/small-tiles.jsx';

// using CommonJS modules
var MediaReact = require('react-media')
const styles = theme => ({
    root: {
        marginTop: 0,
        width: '100%',
        backgroundColor: '#24292e',
    },
    media: {
        height: 300,
        marginBottom:20,
        marginTop:7,
    },
    paper: theme.mixins.gutters({
        paddingTop: 8,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
    }),
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    flexGrow: {
        flex: '1 1 auto',
    },
});
class Home extends Component {
    render() {
        const classes = this.props.classes;
        return(
            <div>
                <Paper className={classes.paper} elevation={10}>
                    <CardMedia
                        className={classes.media}
                        image={process.env.PUBLIC_URL + 'banner/education.jpg'}
                        title="Mountains banner"
                    />
                    <div>
                        <h1> Welcome </h1>
                    </div>
                    <h4> Main Campus 14476 N. Horizon Blvd Suite H</h4>
                    <Typography type="body1" component="p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                    </Typography>
                    <div>
                        <MediaReact query="(max-width: 599px)">
                            {matches => matches ? (
                                <div>
                                    <MySmallTiles>
                                    </MySmallTiles>
                                </div>
                            ) : (
                                <div>
                                    <MyLargeTiles>
                                    </MyLargeTiles>
                                </div>
                            )}
                        </MediaReact>

                    </div>
                </Paper>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);