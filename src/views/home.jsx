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
    card: {
        maxWidth: 550,
    },
    media: {
        height: 200,
    },
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
    cardcontent:{
        maxHeight: 90,
    }
});
class Home extends Component {

    smTileDataFirstRow = [
        {
            img: process.env.PUBLIC_URL + './students/sm-student1.jpg',
            title: 'Image',
            author: 'author',
            rows: 0,
            cols: 0,
        },
    ];

    smTileDataSecondRow = [
        {
            img: process.env.PUBLIC_URL + './icons/horizoneducation.jpg',
            title: 'Image',
            author: 'author',
            cols: 1,
        },
    ];

    lgTileDataFirstRow = [
        {
            img: process.env.PUBLIC_URL + './students/student1.jpg',
            title: 'Image',
            author: 'author',
            cols: 0,
        },
    ];

    lgTileDataSecondRow = [
        {
            img: process.env.PUBLIC_URL + './students/lg-student2.jpg',
            title: 'Image',
            author: 'author',
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

                    <div>
                        <MediaReact query="(max-width: 599px)">
                            {matches => matches ? (
                                    <div className={classes.root}>
                                        <div className={classes.cards}>
                                            <Grid container spacing={24}>
                                                <Grid item xs={12} sm={6}>
                                                    <Card className={classes.card}>
                                                        <CardMedia
                                                            className={classes.media}
                                                            image={process.env.PUBLIC_URL + './students/medical-assistant.jpg'}
                                                            title="Contemplative Reptile"
                                                        />
                                                        <CardContent>
                                                            <Typography type="headline" component="h2">
                                                                Medical Assistant
                                                            </Typography>
                                                            <Typography
                                                                component="p">
                                                                The Medical Assisting diploma program is designed to provide students with
                                                                an understanding of the medical office environment and administering to the needs of both patients and doctors.
                                                            </Typography>
                                                        </CardContent>
                                                        <CareerCards>
                                                        </CareerCards>
                                                    </Card>
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Card className={classes.card}>
                                                        <CardMedia
                                                            className={classes.media}
                                                            image={process.env.PUBLIC_URL + './students/paralegal.jpg'}
                                                            title="Contemplative Reptile"
                                                        />
                                                        <CardContent>
                                                            <Typography type="headline" component="h2">
                                                                Paralegal
                                                            </Typography>
                                                            <Typography component="p">
                                                                This course gives a general overview of the legal system and the role of the paralegal within the system with
                                                                regard to structure of the court system, administrative agencies, private law firm, and the public sector.
                                                            </Typography>
                                                        </CardContent>
                                                        <CareerCards>
                                                        </CareerCards>
                                                    </Card>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={40}>
                                                <Grid item xs={12} sm={6}>
                                                    <Card className={classes.card}>
                                                        <CardMedia
                                                            className={classes.media}
                                                            image={process.env.PUBLIC_URL + './students/programmer.jpg'}
                                                            title="Contemplative Reptile"
                                                        />
                                                        <CardContent>
                                                            <Typography type="headline" component="h2">
                                                                IT
                                                            </Typography>
                                                            <Typography component="p">
                                                                The A+ certification is designed to prepare students for entry level
                                                                employment in the IT field.
                                                            </Typography>
                                                        </CardContent>
                                                        <CareerCards>
                                                        </CareerCards>
                                                    </Card>
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <Card className={classes.card}>
                                                        <CardMedia
                                                            className={classes.media}
                                                            image={process.env.PUBLIC_URL + './students/phelebotomy.jpg'}
                                                            title="Contemplative Reptile"
                                                        />
                                                        <CardContent>
                                                            <Typography type="headline" component="h2">
                                                                Phlebotomy
                                                            </Typography>
                                                            <Typography component="p">
                                                                This course will cover the anatomy and physiology of the cardiovascular
                                                                system and address the legal and ethical issues associated with being a Phlebotomist.
                                                            </Typography>
                                                        </CardContent>
                                                        <CareerCards>
                                                        </CareerCards>
                                                    </Card>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <GridList cellHeight={200} className={classes.gridList} cols={1}>
                                            {this.smTileDataSecondRow.map(tile => (
                                                <GridListTile key={tile.img} cols={tile.cols || 1 }>
                                                    <img src={tile.img} alt={tile.title} />
                                                </GridListTile>
                                            ))}
                                        </GridList>
                                    </div>
                            ) : (
                                <div className={classes.root}>
                                    <div className={classes.cards}>
                                        <Grid container spacing={40}>
                                            <Grid item xs={12} sm={6}>
                                                <Card className={classes.card}>
                                                    <CardMedia
                                                        className={classes.media}
                                                        image={process.env.PUBLIC_URL + './students/network-admin.jpg'}
                                                        title="Network Administrator (IT)"
                                                    />
                                                    <CardContent
                                                        className={classes.cardcontent}>
                                                        <Typography type="headline" component="h2">
                                                            Network Administrator (IT)
                                                        </Typography>
                                                        <Typography
                                                            component="p">
                                                            The Network Administrator (IT) diploma program is designed to
                                                            prepare students for entry level employment in the IT field.
                                                            The program prepares students with the skills and knowledge
                                                            needed to set-up, maintain, troubleshoot, and repair computers
                                                            and small computer networks.
                                                        </Typography>
                                                    </CardContent>
                                                    <CareerCards>
                                                    </CareerCards>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Card className={classes.card}>
                                                    <CardMedia
                                                        className={classes.media}
                                                        image={process.env.PUBLIC_URL + './students/medical-bill.jpg'}
                                                        title="Medical Billing and Office Procedures (MBOP)"
                                                    />
                                                    <CardContent
                                                        className={classes.cardcontent}>
                                                        <Typography type="headline" component="h2">
                                                            Medical Billing & Office Procedures
                                                        </Typography>
                                                        <Typography component="p">
                                                            The Medical Insurance Billing and Coding diploma program
                                                            focuses on procedural knowledge of industry practices and
                                                            close attention to details. The program includes instruction
                                                            in the basic concepts and procedures necessary to perform
                                                            the tasks associated with filling out health insurance forms,
                                                            coding medical practice procedures, and medical terminology.
                                                        </Typography>
                                                    </CardContent>
                                                    <CareerCards>
                                                    </CareerCards>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={40}>
                                            <Grid item xs={12} sm={6}>
                                                <Card className={classes.card}>
                                                    <CardMedia
                                                        className={classes.media}
                                                        image={process.env.PUBLIC_URL + './students/medical-assistant.jpg'}
                                                        title="Contemplative Reptile"
                                                    />
                                                    <CardContent
                                                        className={classes.cardcontent}>
                                                        <Typography type="headline" component="h2">
                                                            Medical Assistant
                                                        </Typography>
                                                        <Typography
                                                            component="p">
                                                            The Medical Assisting diploma program is designed to provide students with
                                                            an understanding of the medical office environment and administering to the needs of both patients and doctors.
                                                        </Typography>
                                                    </CardContent>
                                                    <CareerCards>
                                                    </CareerCards>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Card className={classes.card}>
                                                    <CardMedia
                                                        className={classes.media}
                                                        image={process.env.PUBLIC_URL + './students/paralegal.jpg'}
                                                        title="Contemplative Reptile"
                                                    />
                                                    <CardContent
                                                        className={classes.cardcontent}>
                                                        <Typography type="headline" component="h2">
                                                            Paralegal
                                                        </Typography>
                                                        <Typography component="p">
                                                            This course gives a general overview of the legal system and the role of the paralegal within the system with
                                                            regard to structure of the court system, administrative agencies, private law firm, and the public sector.
                                                        </Typography>
                                                    </CardContent>
                                                    <CareerCards>
                                                    </CareerCards>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={40}>
                                            <Grid item xs={12} sm={6}>
                                                <Card className={classes.card}>
                                                    <CardMedia
                                                        className={classes.media}
                                                        image={process.env.PUBLIC_URL + './students/programmer.jpg'}
                                                        title="Contemplative Reptile"
                                                    />
                                                    <CardContent
                                                        className={classes.cardcontent}>
                                                        <Typography type="headline" component="h2">
                                                            IT A+
                                                        </Typography>
                                                        <Typography component="p">
                                                            The A+ certification is designed to prepare students for entry level
                                                            employment in the IT field.
                                                        </Typography>
                                                    </CardContent>
                                                    <CareerCards>
                                                    </CareerCards>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Card className={classes.card}>
                                                    <CardMedia
                                                        className={classes.media}
                                                        image={process.env.PUBLIC_URL + './students/phelebotomy.jpg'}
                                                        title="Contemplative Reptile"
                                                    />
                                                    <CardContent
                                                        className={classes.cardcontent}>
                                                        <Typography type="headline" component="h2">
                                                            Phlebotomy
                                                        </Typography>
                                                        <Typography component="p">
                                                            This course will cover the anatomy and physiology of the cardiovascular
                                                            system and address the legal and ethical issues associated with being a Phlebotomist.
                                                        </Typography>
                                                    </CardContent>
                                                    <CareerCards>
                                                    </CareerCards>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <GridList cellHeight={500} className={classes.gridList} cols={2}>
                                        {this.lgTileDataFirstRow.map(tile => (
                                            <GridListTile key={tile.img} cols={0}>
                                                <img src={tile.img} alt={tile.title} />
                                            </GridListTile>
                                        ))}
                                        {this.lgTileDataFirstRow.map(tile => (
                                            <GridListTile key={tile.img} cols={1}>
                                                <h1 className={classes.quote} >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"</h1>
                                            </GridListTile>
                                        ))}
                                    </GridList>
                                    <GridList cellHeight={500} className={classes.gridList} cols={2}>
                                        {this.lgTileDataSecondRow.map(tile => (
                                            <GridListTile key={tile.img} cols={tile.cols || 0 }>
                                                <h1 className={classes.quote} >" Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h1>
                                            </GridListTile>
                                        ))}
                                        {this.lgTileDataSecondRow.map(tile => (
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
};

export default withStyles(styles)(Home);