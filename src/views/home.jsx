import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto'
import {withStyles} from 'material-ui/styles';
import {CardMedia} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Directions from "../views/directions"
import Carousel from "../components/carousel"
import {Divider, IconButton} from "../../node_modules/material-ui/index";
import classnames from 'classnames';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Collapse from 'material-ui/transitions/Collapse';

import {CardActions, CardContent} from "../../node_modules/material-ui/Card/index";

let MediaReact = require('react-media');

// using CommonJS modules
const styles = theme => ({
    mobileStepper: {
        background: 'white',
    },
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    banner:{
        height: 350,
    },
    mobileBanner: {
        height: 250,
        backgroundPosition: 'left',
    },
    paper: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
    }),
    avatar: {
        display: 'block',
        margin: 'auto',
        marginTop: 40,
    },
    header: {
        fontWeight: 300,
        marginTop: 20,
        fontSize: 30,
        display: 'flex',
        alignItems: 'center',
        height: 50,
        marginBottom: 20,
    },
    card: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
});
let information = [
    "Founder of Horizon Education LLC Samir A. Awale began his educational journey in 2007 when he\n" +
    "                                        studied Web Graphic Design at a local institute called Computer Career Center (CCC), and\n" +
    "                                        continued to further his education by getting a network administration diploma form the\n" +
    "                                        same institute CCC. His thrive to get higher and better in life, he got his higher education\n" +
    "                                        from the University of Phoenix while he was working at CCC, where he achieved his Masters in\n" +
    "                                        Information management in 2012.",
    "He joined Computer Career Center as an Admissions Representative in 2008 where he was enrolling\n" +
    "                                        student in the educational institute he graduated from, and to help them join the school and\n" +
    "                                        improve their education. After a year, and accomplishing several IT certifications in his field\n" +
    "                                        of study, he was able to join the students in classroom as an IT instructor where he was\n" +
    "                                        utilizing his skills, knowledge and education to help the student learn more about real life\n" +
    "                                        experience in the field. In 2009, the network administrator position got available at CCC, and\n" +
    "                                        Institute’s top management realized the skills, knowledge, and education will qualify Samir for\n" +
    "                                        the job, and since 2009, he has been working as a network administrator for computer career\n" +
    "                                        Center.",
    "In the same year of 2009, Computer Career Center changed its name to Computer Career Center,\n" +
    "                                        a Division of Vista College. In 2011, Computer Career Center, a Division of Vista College\n" +
    "                                        changed\n" +
    "                                        its name to Vista College in 2011.",
    " In March 12, 2017, the founder of Horizon Education LLC Samir Awale, decided to go in business\n" +
    "                                        for himself along with his longtime friend Joel Pena. When they decided to go in business, they\n" +
    "                                        were looking into locating the school in Horizon City TX. In a large shopping center located at\n" +
    "                                        the main street of Horizon city called Horizon Boulevard, which created the name of the school\n" +
    "                                        Horizon Education.",
    "The building size was at 3400S/F that is divided into two big rooms. The\n" +
    "                                        facilities consist of administrative offices, classroom, library, lecture rooms, and computer\n" +
    "                                        labs. The rooms are modern; well- equipped and provide adequate space for the approved\n" +
    "                                        program(s). That was the beginning of a strong, and dependable organization, started from the\n" +
    "                                        community for the community."];

class Home extends Component {
    state = {
        expanded: false,
        activeStep: 0,
    };
    handleExpandClick = () => {
        this.setState({expanded: !this.state.expanded});
    };

    handleNext = () => {
        this.setState({
            activeStep: this.state.activeStep + 1,
        });
    };

    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1,
        });
    };
    render() {
        const {classes, theme} = this.props;
        return(
            <div>
                <MediaReact query="(max-width: 599px)">
                    {matches => matches ? (
                        <div>
                            <Paper className={classes.paper} elevation={10}>
                                <CardMedia
                                    className={classes.mobileBanner}
                                    image={process.env.PUBLIC_URL + 'banner/education.jpg'}
                                    title="Mountains banner"
                                />
                                <div>
                                    <Typography type="title" className={classes.header}> About </Typography>
                                </div>
                                <Typography type="body1" component="p">
                                    {information[0]}
                                </Typography>
                                <CardActions disableActionSpacing>
                                    <IconButton aria-label="Add to favorites">
                                        <FavoriteIcon/>
                                    </IconButton>
                                    <IconButton aria-label="Share">
                                        <ShareIcon/>
                                    </IconButton>
                                    <div className={classes.flexGrow}/>
                                    <IconButton
                                        className={classnames(classes.expand, {
                                            [classes.expandOpen]: this.state.expanded,
                                        })}
                                        onClick={this.handleExpandClick}
                                        aria-expanded={this.state.expanded}
                                        aria-label="Show more"
                                    >
                                        <ExpandMoreIcon/>
                                    </IconButton>
                                </CardActions>
                                <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph type="body2">
                                            History:
                                        </Typography>
                                        <Typography paragraph>
                                            {information[1]}
                                        </Typography>
                                        <Typography paragraph>
                                            {information[2]}
                                        </Typography>
                                        <Typography paragraph>
                                            {information[3]}
                                        </Typography>
                                        <Typography>
                                            {information[4]}
                                        </Typography>
                                        <Typography>
                                            {information[5]}
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </Paper>
                        </div>
                    ) : (
                        <div>
                            <Paper className={classes.paper} elevation={10}>
                                <CardMedia
                                    className={classes.banner}
                                    image={process.env.PUBLIC_URL + 'banner/education.jpg'}
                                    title="Mountains banner"
                                />
                                <div>
                                    <Typography type="title" className={classes.header}> About </Typography>
                                </div>
                                <Typography type="body1" component="p">
                                    {information[0]}
                                </Typography>
                                &nbsp;
                                <Typography type="body1" component="p">
                                    {information[1]}
                                </Typography>
                                <CardActions disableActionSpacing>
                                    <IconButton aria-label="Add to favorites">
                                        <FavoriteIcon/>
                                    </IconButton>
                                    <IconButton aria-label="Share">
                                        <ShareIcon/>
                                    </IconButton>
                                    <div className={classes.flexGrow}/>
                                    <IconButton
                                        className={classnames(classes.expand, {
                                            [classes.expandOpen]: this.state.expanded,
                                        })}
                                        onClick={this.handleExpandClick}
                                        aria-expanded={this.state.expanded}
                                        aria-label="Show more"
                                    >
                                        <ExpandMoreIcon/>
                                    </IconButton>
                                </CardActions>
                                <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph type="body2">
                                            History:
                                        </Typography>
                                        <Typography paragraph>
                                            {information[2]}
                                        </Typography>
                                        <Typography paragraph>
                                            {information[3]}
                                        </Typography>
                                        <Typography paragraph>
                                            {information[4]}
                                        </Typography>
                                        <Typography>
                                            {information[5]}
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </Paper>
                        </div>
                    )}
                </MediaReact>
                <Divider/>
                <Carousel>
                </Carousel>
                <Divider/>
                <Directions>
                </Directions>
                <Divider/>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Home);