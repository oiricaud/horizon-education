import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto'
import {withStyles} from 'material-ui/styles';
import {CardMedia} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import {Avatar} from "../../node_modules/material-ui/index";
import classNames from 'classnames';

// using CommonJS modules
const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },
    banner:{
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

    avatar: {
        display: 'block',
        margin: 'auto',
        marginTop: 40,
    },
    bigAvatar: {
        width: 150,
        height: 150,
    },
});

class Home extends Component {

    render() {
        const classes = this.props.classes;

        return(
            <div>
                <Paper className={classes.paper} elevation={10}>
                    <CardMedia
                        className={classes.banner}
                        image={process.env.PUBLIC_URL + 'banner/education.jpg'}
                        title="Mountains banner"
                    />
                    <div>
                        <h1> About </h1>
                    </div>
                    <h4> History</h4>
                    <Typography type="body1" component="p">
                        Founder of Horizon Education LLC Samir A. Awale began his educational journey in 2007 when he
                        studied Web Graphic Design at a local institute called Computer Career Center (CCC), and
                        continued to further his education by getting a network administration diploma form the
                        same institute CCC. His thrive to get higher and better in life, he got his higher education
                        from the University of Phoenix while he was working at CCC, where he achieved his Masters in
                        Information management in 2012.
                    </Typography>
                    <br></br>
                    <Typography type="body1" component="p">
                        He joined Computer Career Center as an Admissions Representative in 2008 where he was enrolling
                        student in the educational institute he graduated from, and to help them join the school and
                        improve their education. After a year, and accomplishing several IT certifications in his field
                        of study, he was able to join the students in classroom as an IT instructor where he was
                        utilizing his skills, knowledge and education to help the student learn more about real life
                        experience in the field. In 2009, the network administrator position got available at CCC, and
                        Institute’s top management realized the skills, knowledge, and education will qualify Samir for
                        the job, and since 2009, he has been working as a network administrator for computer career
                        Center.
                    </Typography>
                    <br></br>
                    <Typography>
                        In the same year of 2009, Computer Career Center changed its name to Computer Career Center,
                        a Division of Vista College. In 2011, Computer Career Center, a Division of Vista College
                        changed
                        its name to Vista College in 2011.
                    </Typography>

                    <br></br>
                    <Typography type="body1" component="p">
                        In March 12, 2017, the founder of Horizon Education LLC Samir Awale, decided to go in business
                        for himself along with his longtime friend Joel Pena. When they decided to go in business, they
                        were looking into locating the school in Horizon City TX. In a large shopping center located at
                        the main street of Horizon city called Horizon Boulevard, which created the name of the school
                        Horizon Education.
                    </Typography>

                    <br></br>
                    <Typography type="body1" component="p">
                        The building size was at 3400S/F that is divided into two big rooms. The
                        facilities consist of administrative offices, classroom, library, lecture rooms, and computer
                        labs. The rooms are modern; well- equipped and provide adequate space for the approved
                        program(s). That was the beginning of a strong, and dependable organization, started from the
                        community for the community.
                    </Typography>

                    <Avatar
                        alt="Adelle Charles"
                        src={process.env.PUBLIC_URL + './faculty/default.jpg'}
                        className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                </Paper>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    title: React.PropTypes.func,
};

export default withStyles(styles)(Home);