import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto'
import { withStyles } from 'material-ui/styles';
import { CardMedia } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import CareerCards from '../components/cards-careers.jsx';
import {Grid} from "../../node_modules/material-ui/index";
import Card from "../../node_modules/material-ui/Card/Card";
import {CardContent} from "../../node_modules/material-ui/Card/index";
import {GridList, GridListTile} from "../../node_modules/material-ui/GridList/index";

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
    banner:{
        height: 250,
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
    quote:{
        color: 'deepskyblue',
        fontSize: 36,
        margin: 50,
        textAlign: 'left',
    },
    cards:{
        marginTop: 30,
        marginBottom: 40,
        marginLeft: 5,
        marginRight: 5,
    },
});
class Home extends Component {
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
        this.setState({ open: false });
    };
    handleChangeMultiline = event => {
        this.setState({
            multiline: event.target.value,
        });
    };

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
                        <h1> Horizon Education </h1>
                    </div>
                    <h4> Main Campus 14476 N. Horizon Blvd Suite H</h4>
                    <Typography type="body1" component="p">
                                Horizon Education is from the community, for the community. Horizon Education is on a mission to
                        provide high quality education to help students actively seeking education to increase, improve,
                        and develop their skills to obtain employment and career success. Committed to helping the community
                        by increasing the employment rate with highly trained professionals will make an improved successful
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
                                        info={' The Network Administrator (IT) diploma program is designed to\n' +
                                        '       prepare students for entry level employment in the IT field.\n'}
                                    >
                                    </CareerCards>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CareerCards
                                        title={'Medical Billing & Office Procedures'}
                                        image={process.env.PUBLIC_URL + './students/medical-bill.jpg'}
                                        info={'  The Medical Insurance Billing and Coding diploma program\n' +
                                        '        focuses on procedural knowledge of industry practices and\n' +
                                        '        close attention to details. '}
                                    >
                                    </CareerCards>
                                </Grid>
                            </Grid>
                            <Grid container spacing={40}>
                                <Grid item xs={12} sm={6}>
                                    <CareerCards
                                        title={'Medical Assistant'}
                                        image={process.env.PUBLIC_URL + './students/medical-assistant.jpg'}
                                        info={'  The Medical Assisting diploma program is designed to provide students with\n' +
                                        ' an understanding of the medical office environment and' +
                                        ' administering to the needs of both patients and doctors.'}
                                    >
                                    </CareerCards>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CareerCards
                                        title={'Paralegal'}
                                        image={process.env.PUBLIC_URL + './students/paralegal.jpg'}
                                        info={'    This course gives a general overview of the legal system and the role of the paralegal within the system with\n' +
                                        ' regard to structure of the court system, administrative' +
                                        ' agencies, private law firm, and the public sector.'}
                                    >
                                    </CareerCards>
                                </Grid>
                            </Grid>
                            <Grid container spacing={40}>
                                <Grid item xs={12} sm={6}>
                                    <CareerCards
                                        title={'IT A+'}
                                        image={process.env.PUBLIC_URL + './students/programmer.jpg'}
                                        info={'  The A+ certification is designed to prepare students for entry level\n' +
                                        '       employment in the IT field.'}
                                    >
                                    </CareerCards>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CareerCards
                                        title={'Phlebotomy'}
                                        image={process.env.PUBLIC_URL + './students/phelebotomy.jpg'}
                                        info={'   This course will cover the anatomy and physiology of the cardiovascular\n' +
                                        ' system and address the legal and ethical issues associated' +
                                        ' with being a Phlebotomist.'}
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
                                                <GridListTile key={tile.img} cols={tile.cols || 1 }>
                                                    <img src={tile.img} alt={tile.title} />
                                                </GridListTile>
                                            ))}
                                        </GridList>
                                    </div>
                            ) : (
                                <div className={classes.root}>
                                    <GridList cellHeight={500} className={classes.gridList} cols={2}>
                                        {this.studentTile.map(tile => (
                                            <GridListTile key={tile.img} cols={0}>
                                                <img src={tile.img} alt={tile.title} />
                                            </GridListTile>
                                        ))}
                                        {this.studentTile.map(tile => (
                                            <GridListTile key={tile.img} cols={1}>
                                                <h1 className={classes.quote} >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"</h1>
                                            </GridListTile>
                                        ))}
                                    </GridList>
                                    <GridList cellHeight={500} className={classes.gridList} cols={2}>
                                        {this.groupStudentTile.map(tile => (
                                            <GridListTile key={tile.img} cols={tile.cols || 0 }>
                                                <h1 className={classes.quote} >" Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h1>
                                            </GridListTile>
                                        ))}
                                        {this.groupStudentTile.map(tile => (
                                            <GridListTile key={tile.img} cols={tile.cols || 1 }>
                                                <img src={tile.img} alt={tile.title} />
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

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    title: React.PropTypes.func,
};

export default withStyles(styles)(Home);