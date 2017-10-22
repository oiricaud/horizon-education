import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto'
import {withStyles} from 'material-ui/styles';
import {CardMedia} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import CareerCards from '../components/cards-careers.jsx';
import {Grid} from "../../node_modules/material-ui/index";
import {GridList, GridListTile} from "../../node_modules/material-ui/GridList/index";

// using CommonJS modules
let MediaReact = require('react-media');
const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    banner: {
        height: 350,
    },
    paper: theme.mixins.gutters({
        paddingTop: 8,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
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

class Academics extends Component {
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
                        image={process.env.PUBLIC_URL + 'banner/academics.jpg'}
                        title="Mountains banner"
                    />
                    <h1> Academics </h1>
                    <Typography type="body1" component="p">
                        Horizon Education is from the community, for the community. Horizon Education is on a mission to
                        provide high quality education to help students actively seeking education to increase, improve,
                        and develop their skills to obtain employment and career success. Committed to helping the
                        community
                        by increasing the employment rate with highly trained professionals will make an improved
                        successful
                        community.
                    </Typography>
                    <br></br>
                    <Typography type="body1" component="p">
                        As our era is in a fast and accelerated change phase in the career fields, Horizon
                        Education recognizes it, it takes the responsibility to provide and prepare its students for
                        any upcoming changes in the career field of choice by guiding the students, and providing high
                        quality education related to the career field of choice.
                    </Typography>

                    <div className={classes.root}>
                        <div className={classes.cards}>
                            <Grid container spacing={40}>
                                <Grid item xs={12} sm={6}>
                                    <CareerCards
                                        title={'Network Administrator (IT)'}
                                        image={process.env.PUBLIC_URL + './students/network-admin.jpg'}
                                        info={'The Information Technology Diploma in the Network Administration Program, is awarded to students who are prepared for an entry level employment in the technology field. The Network Administrator Program prepares students to maintain, troubleshoot, setup a network, also it provides the skills and knowledge needed to manage a small network upon the completion of the program.\n' +
                                        'A combination of having A+, and Net+ Certifications upon graduation, also some of the Hands on skills that the program provides to graduates are Help Desk Technician, Network Administration, Technical Support, and Field Support Technician, increase the marketability of the students, and may increase the hire possibility.'}
                                    >
                                    </CareerCards>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CareerCards
                                        title={'Medical Billing & Office Procedures'}
                                        image={process.env.PUBLIC_URL + './students/medical-bill.jpg'}
                                        info={'The students in the Medical Billing and Office Procedures Diploma Program will learn the procedural knowledge Medical Billing and coding. Paying attention to details when filling insurance forms, and dealing with related tasks associated with special Medical coding for a doctor’s offices and Hospitals. As a Medical Billing and Office Procedures student, learning the professional administrative health functions becomes a main skill in the medical field of Medical Billing and Office Procedures. Graduates may found jobs at the hospitals, insurance companies, home healthcare and clinics. Medical Billing and Office Procedures clerk, may work in the administration at the front office, or may help with any clinical laboratory dealing with patients.'}
                                    >
                                    </CareerCards>
                                </Grid>
                            </Grid>
                            <Grid container spacing={40}>
                                <Grid item xs={12} sm={6}>
                                    <CareerCards
                                        title={'Medical Assistant'}
                                        image={process.env.PUBLIC_URL + './students/medical-assistant.jpg'}
                                        info={'Students that complete the Medical Assisting Diploma Program may have better understanding of both the Medical Office terminology, record keeping, and clinical laboratory environment and procedures. The skills provided by the program may help the students with Phlebotomy technician skills procedures, EKG procedures. The employment opportunity maybe available in Doctors’ offices, Hospitals and Clinics.'}
                                    >
                                    </CareerCards>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CareerCards
                                        title={'Paralegal'}
                                        image={process.env.PUBLIC_URL + './students/paralegal.jpg'}
                                        info={'This is a certification program that prepares the certified paralegal associates to have an overview of the legal system, and a better understanding of the court system. Working with lawyers and private law firms for the public sectors.'}
                                    >
                                    </CareerCards>
                                </Grid>
                            </Grid>
                            <Grid container spacing={40}>
                                <Grid item xs={12} sm={6}>
                                    <CareerCards
                                        title={'IT A+'}
                                        image={process.env.PUBLIC_URL + './students/programmer.jpg'}
                                        info={'The A+ certification is designed to prepare students for entry level employment in the IT field. The A+ certification prepares students with the skills and knowledge needed to set-up, maintain, troubleshoot, and repair computers and small computer networks. Graduates will leave the program with the hands-on experience, customer service skills, and A+ certifications expected by today’s employers. The A+ prepares graduates for positions such Help Desk Analyst, Customer Support Representative, Technical Support Specialist, and Field Service Technician.'}
                                    >
                                    </CareerCards>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CareerCards
                                        title={'Phlebotomy'}
                                        image={process.env.PUBLIC_URL + './students/phelebotomy.jpg'}
                                        info={'course prepares the students to work with variety of devices to accomplish many tasks of blood collection process and procedures. Working with the anatomy and physiology of human cardiovascular system, prepares the students to address the legal and ethical issues associated with Phlebotomist. Learning all about the infection prevention, and prepare labeling, for accessioning of specimens and quality assurance. Some of the skills that the students accomplish along the course are working with vacuum collection devices, butterfly needles, also blood cultures specimen collection on adults and children, and infants.'}
                                    >
                                    </CareerCards>
                                </Grid>
                            </Grid>
                        </div>

                        <MediaReact query="(max-width: 599px)">
                            {matches => matches ? (
                                <div className={classes.root}>
                                    <GridList cellHeight={200} className={classes.gridList} cols={1}>
                                        {this.horizonEducationTile.map(tile => (
                                            <GridListTile key={tile.img} cols={tile.cols || 1}>
                                                <img src={tile.img} alt={tile.title}/>
                                            </GridListTile>
                                        ))}
                                    </GridList>
                                </div>
                            ) : (
                                <div className={classes.root}>
                                    <GridList cellHeight={500} className={classes.gridList} cols={2}>
                                        {this.studentTile.map(tile => (
                                            <GridListTile key={tile.img} cols={0}>
                                                <img src={tile.img} alt={tile.title}/>
                                            </GridListTile>
                                        ))}
                                        {this.studentTile.map(tile => (
                                            <GridListTile key={tile.img} cols={1}>
                                                <h1 className={classes.quote}>"Horizon Education is from the community,
                                                    for the community."</h1>
                                            </GridListTile>
                                        ))}
                                    </GridList>
                                    <GridList cellHeight={500} className={classes.gridList} cols={2}>
                                        {this.groupStudentTile.map(tile => (
                                            <GridListTile key={tile.img} cols={tile.cols || 0}>
                                                <h1 className={classes.quote}>"Committed to helping the community by
                                                    increasing the employment rate with highly trained professionals
                                                    will make an improved successful community."</h1>
                                            </GridListTile>
                                        ))}
                                        {this.groupStudentTile.map(tile => (
                                            <GridListTile key={tile.img} cols={tile.cols || 1}>
                                                <img src={tile.img} alt={tile.title}/>
                                            </GridListTile>
                                        ))}
                                    </GridList>
                                </div>
                            )}
                        </MediaReact>
                    </div>
                </Paper>
            </div>
        );
    }
}

Academics.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Academics);