import React from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto'
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import CareerCards from '../components/cards-careers.jsx';
import {Button, Grid} from "../../node_modules/material-ui/index";
import MobileStepper from 'material-ui/MobileStepper';
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import KeyboardArrowRight from "material-ui-icons/KeyboardArrowRight";
import Card from "../../node_modules/material-ui/Card/Card";

// using CommonJS modules
let MediaReact = require('react-media');
const styles = theme => ({
    mobileStepper: {
        background: 'white',
    },
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
        marginBottom: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
    }),
    cards: {
        paddingTop: 8,
        paddingBottom: 24,
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
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
});
let careers = [
    "Network Administrator (IT)",
    "Medical Billing & Office Procedures",
    "Medical Assistant",
    "Paralegal",
    "IT A+",
    "Phlebotomy"];
let careersImages = [
    process.env.PUBLIC_URL + './students/network-admin.jpg',
    process.env.PUBLIC_URL + './students/medical-bill.jpg',
    process.env.PUBLIC_URL + './students/medical-assistant.jpg',
    process.env.PUBLIC_URL + './students/paralegal.jpg',
    process.env.PUBLIC_URL + './students/programmer.jpg',
    process.env.PUBLIC_URL + './students/phelebotomy.jpg'];

let careersInfo = [
    "The Information Technology Diploma in the Network Administration Program, is awarded to students who are prepared for an entry level employment in the technology field. The Network Administrator Program prepares students to maintain, troubleshoot, setup a network, also it provides the skills and knowledge needed to manage a small network upon the completion of the program.\n" +
    "A combination of having A+, and Net+ Certifications upon graduation, also some of the Hands on skills that the program provides to graduates are Help Desk Technician, Network Administration, Technical Support, and Field Support Technician, increase the marketability of the students, and may increase the hire possibility.",
    "The students in the Medical Billing and Office Procedures Diploma Program will learn the procedural knowledge Medical Billing and coding. Paying attention to details when filling insurance forms, and dealing with related tasks associated with special Medical coding for a doctor’s offices and Hospitals. As a Medical Billing and Office Procedures student, learning the professional administrative health functions becomes a main skill in the medical field of Medical Billing and Office Procedures. Graduates may found jobs at the hospitals, insurance companies, home healthcare and clinics. Medical Billing and Office Procedures clerk, may work in the administration at the front office, or may help with any clinical laboratory dealing with patients.",
    "Students that complete the Medical Assisting Diploma Program may have better understanding of both the Medical Office terminology, record keeping, and clinical laboratory environment and procedures. The skills provided by the program may help the students with Phlebotomy technician skills procedures, EKG procedures. The employment opportunity maybe available in Doctors’ offices, Hospitals and Clinics.",
    "Sudent going through the Criminal Justice Diploma Program will be prepared the academic of the criminal law and the legal procedures of a court system and law enforcement. Graduates are prepared to work with the Person System, Law Offices Courts and as security Officers.",
    "The 2 parts of A+ certifications study, prepares the students for an entry level employment in certain are in the IT field.  Working with PCs, troubleshoot, maintain and repair PCs is a part of the knowledge and skills that a student built through the course of A+. Employment Positions with A+ Certifications maybe as technical support, Help Desk technician, field support technician.",
    "Phlebotomy course prepares the students to work with variety of devices to accomplish many tasks of blood collection process and procedures. Working with the anatomy and physiology of human cardiovascular system, prepares the students to address the legal and ethical issues associated with Phlebotomist. Learning all about the infection prevention, and prepare labeling, for accessioning of specimens and quality assurance. Some of the skills that the students accomplish along the course are working with vacuum collection devices, butterfly needles, also blood cultures specimen collection on adults and children, and infants."];

class Carousel extends React.Component {
    state = {
        activeStep: 0,
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
        return (
            <div>
                <MediaReact query="(max-width: 599px)">
                    {matches => matches ? (
                        <div>
                            <Paper className={classes.paper} elevation={10}>
                                <div>
                                    <Typography type="title" className={classes.header}> Academics </Typography>
                                </div>
                                <Typography type="body1" component="p">
                                    Horizon Education is from the community, for the community. Horizon Education is on
                                    a mission to
                                    provide high quality education to help students actively seeking education to
                                    increase, improve,
                                    and develop their skills to obtain employment and career success. Committed to
                                    helping the
                                    community
                                    by increasing the employment rate with highly trained professionals will make an
                                    improved
                                    successful
                                    community.
                                </Typography>
                                <br></br>
                                <Typography type="body1" component="p">
                                    As our era is in a fast and accelerated change phase in the career fields, Horizon
                                    Education recognizes it, it takes the responsibility to provide and prepare its
                                    students for
                                    any upcoming changes in the career field of choice by guiding the students, and
                                    providing high
                                    quality education related to the career field of choice.
                                </Typography>
                            </Paper>
                            <div className={classes.cards}>
                                <Grid container spacing={24}>
                                    <Grid item xs={12}>
                                        <CareerCards
                                            title={careers[this.state.activeStep]}
                                            image={careersImages[this.state.activeStep]}
                                            info={careersInfo[this.state.activeStep]}
                                        >
                                        </CareerCards>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Card className={classes.card}>
                                            <MobileStepper
                                                type="dots"
                                                steps={6}
                                                position="static"
                                                activeStep={this.state.activeStep}
                                                className={classes.mobileStepper}
                                                nextButton={
                                                    <Button dense onClick={this.handleNext}
                                                            disabled={this.state.activeStep === 5}>
                                                        Next
                                                        {theme.direction === 'rtl' ? <KeyboardArrowLeft/> :
                                                            <KeyboardArrowRight/>}
                                                    </Button>
                                                }
                                                backButton={
                                                    <Button dense onClick={this.handleBack}
                                                            disabled={this.state.activeStep === 0}>
                                                        {theme.direction === 'rtl' ? <KeyboardArrowRight/> :
                                                            <KeyboardArrowLeft/>}
                                                        Back
                                                    </Button>
                                                }
                                            />
                                        </Card>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <Paper className={classes.paper} elevation={10}>
                                <div>
                                    <Typography type="title" className={classes.header}> Academics </Typography>
                                </div>
                                <Typography type="body1" component="p">
                                    Horizon Education is from the community, for the community. Horizon Education is on
                                    a mission to
                                    provide high quality education to help students actively seeking education to
                                    increase, improve,
                                    and develop their skills to obtain employment and career success. Committed to
                                    helping the
                                    community
                                    by increasing the employment rate with highly trained professionals will make an
                                    improved
                                    successful
                                    community.
                                </Typography>
                                <br></br>
                                <Typography type="body1" component="p">
                                    As our era is in a fast and accelerated change phase in the career fields, Horizon
                                    Education recognizes it, it takes the responsibility to provide and prepare its
                                    students for
                                    any upcoming changes in the career field of choice by guiding the students, and
                                    providing high
                                    quality education related to the career field of choice.
                                </Typography>

                                <div className={classes.root}>
                                    <div className={classes.cards}>
                                        <Grid container spacing={40}>
                                            <Grid item xs={12} sm={6}>
                                                <CareerCards
                                                    title={careers[(2 * this.state.activeStep)]}
                                                    image={careersImages[(2 * this.state.activeStep)]}
                                                    info={careersInfo[(2 * this.state.activeStep)]}
                                                >
                                                </CareerCards>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <CareerCards
                                                    title={careers[(2 * this.state.activeStep) + 1]}
                                                    image={careersImages[(2 * this.state.activeStep) + 1]}
                                                    info={careersInfo[(2 * this.state.activeStep) + 1]}
                                                >
                                                </CareerCards>
                                            </Grid>
                                        </Grid>

                                        <Grid container spacing={40}>
                                            <Grid item xs={12}>
                                                <Card className={classes.card}>
                                                    <MobileStepper
                                                        type="dots"
                                                        steps={3}
                                                        position="static"
                                                        activeStep={this.state.activeStep}
                                                        className={classes.mobileStepper}
                                                        nextButton={
                                                            <Button dense onClick={this.handleNext}
                                                                    disabled={this.state.activeStep === 2}>
                                                                Next
                                                                {theme.direction === 'rtl' ? <KeyboardArrowLeft/> :
                                                                    <KeyboardArrowRight/>}
                                                            </Button>
                                                        }
                                                        backButton={
                                                            <Button dense onClick={this.handleBack}
                                                                    disabled={this.state.activeStep === 0}>
                                                                {theme.direction === 'rtl' ? <KeyboardArrowRight/> :
                                                                    <KeyboardArrowLeft/>}
                                                                Back
                                                            </Button>
                                                        }
                                                    />
                                                </Card>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </Paper>
                        </div>
                    )}
                </MediaReact>
            </div>
        );
    }
}

Carousel.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Carousel);