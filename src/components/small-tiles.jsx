// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile } from 'material-ui/GridList';
import {CardActions, CardContent, CardMedia} from "../../node_modules/material-ui/Card/index";
import {Button, Grid, Typography} from "../../node_modules/material-ui/index";
import Card from "../../node_modules/material-ui/Card/Card";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },
    card: {
        maxWidth: 350,
    },
    media: {
        height: 200,
    },
    gridList: {
        paddingTop: 50,
        maxWidth: 1500,
        cellHeight: 'auto',
    },
    subheader: {
        width: '100%',
    },
    quote:{
        color: 'deepskyblue',
        fontSize: 24,
        paddingTop: 10,
        verticalAlign: 'middle',
        textAlign: 'center',
    },
    cards:{
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
    }
});

const tileDataFirstRow = [
    {
        img: process.env.PUBLIC_URL + './students/sm-student1.jpg',
        title: 'Image',
        author: 'author',
        rows: 0,
        cols: 0,
    },
];

const tileDataSecondRow = [
    {
        img: process.env.PUBLIC_URL + './icons/horizoneducation.jpg',
        title: 'Image',
        author: 'author',
        cols: 1,
    },
];

const tileDataThirdRow = [
    {
        img: process.env.PUBLIC_URL + './students/sm-student2.jpg',
        title: 'Image',
        author: 'author',
        rows: 2,
        cols: 0,
    },
];
function ImageGridList(props) {
    const classes = props.classes;

    return (
        <div className={classes.root}>
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
                                <CardActions>
                                    <Button dense color="primary">
                                        Enroll
                                    </Button>
                                    <Button dense color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
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
                                <CardActions>
                                    <Button dense color="primary">
                                        Enroll
                                    </Button>
                                    <Button dense color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
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
                                <CardActions>
                                    <Button dense color="primary">
                                        Enroll
                                    </Button>
                                    <Button dense color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
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
                                <CardActions>
                                    <Button dense color="primary">
                                        Enroll
                                    </Button>
                                    <Button dense color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
                <GridList cellHeight={200} className={classes.gridList} cols={1}>
                    {tileDataFirstRow.map(tile => (
                        <GridListTile key={tile.img} cols={0}>
                            <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                    ))}
                    {tileDataSecondRow.map(tile => (
                        <GridListTile key={tile.img} cols={tile.cols || 1 }>
                            <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                    ))}
                    {tileDataFirstRow.map(tile => (
                        <GridListTile key={tile.img} cols={1}>
                            <h1 className={classes.quote} >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"</h1>
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </div>
    );
}

ImageGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);