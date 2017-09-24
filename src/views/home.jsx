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
        paddingTop: 50,
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
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
    },
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
                                                            <Typography component="p">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                                sint occaecat cupidatat non proident, sunt in culpa
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
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                                sint occaecat cupidatat non proident, sunt in culpa
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
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                                sint occaecat cupidatat non proident, sunt in culpa
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
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                                sint occaecat cupidatat non proident, sunt in culpa
                                                            </Typography>
                                                        </CardContent>
                                                        <CareerCards>
                                                        </CareerCards>
                                                    </Card>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <GridList cellHeight={200} className={classes.gridList} cols={1}>
                                            {this.smTileDataFirstRow.map(tile => (
                                                <GridListTile key={tile.img} cols={0}>
                                                    <img src={tile.img} alt={tile.title} />
                                                </GridListTile>
                                            ))}
                                            {this.smTileDataSecondRow.map(tile => (
                                                <GridListTile key={tile.img} cols={tile.cols || 1 }>
                                                    <img src={tile.img} alt={tile.title} />
                                                </GridListTile>
                                            ))}
                                            {this.smTileDataFirstRow.map(tile => (
                                                <GridListTile key={tile.img} cols={1}>
                                                    <h1 className={classes.quote} >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"</h1>
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
                                                        image={process.env.PUBLIC_URL + './students/medical-assistant.jpg'}
                                                        title="Contemplative Reptile"
                                                    />
                                                    <CardContent>
                                                        <Typography type="headline" component="h2">
                                                            Medical Assistant
                                                        </Typography>
                                                        <Typography component="p">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                            sint occaecat cupidatat non proident, sunt in culpa
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
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                            sint occaecat cupidatat non proident, sunt in culpa
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
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                            sint occaecat cupidatat non proident, sunt in culpa
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
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                            sint occaecat cupidatat non proident, sunt in culpa
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