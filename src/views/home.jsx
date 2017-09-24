import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto'
import { withStyles } from 'material-ui/styles';
import { CardMedia } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import MyLargeTiles from '../components/large-tiles.jsx';
import MySmallTiles from '../components/small-tiles.jsx';
import MyForum from '../components/forum.jsx';
import {AppBar, Button, Dialog, Divider, Grid, IconButton, List, Toolbar} from "../../node_modules/material-ui/index";
import Card from "../../node_modules/material-ui/Card/Card";
import {CardActions, CardContent} from "../../node_modules/material-ui/Card/index";
import {GridList, GridListTile} from "../../node_modules/material-ui/GridList/index";
import {ListItem, ListItemText} from "../../node_modules/material-ui/List/index";
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';
import TextField from "../../node_modules/material-ui/TextField/TextField";
// using CommonJS modules
var MediaReact = require('react-media')
const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },
    appBar: {
        position: 'relative',
        backgroundColor: 'cadetblue',
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
    subheader: {
        width: '100%',
        height: '100%',
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
    },
    textField: {
        paddingTop: 8,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        width: 200,

    },
});
class Home extends Component {

    tileDataFirstRow = [
        {
            img: process.env.PUBLIC_URL + './students/student1.jpg',
            title: 'Image',
            author: 'author',
            cols: 0,
        },
    ];

    tileDataSecondRow = [
        {
            img: process.env.PUBLIC_URL + './students/lg-student2.jpg',
            title: 'Image',
            author: 'author',
            cols: 1,
        },
    ];

    state = {
        open: false,

    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };


    handleChangeMultiline = event => {
        this.setState({
            multiline: event.target.value,
        });
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
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
                                <div>
                                    <MySmallTiles>
                                    </MySmallTiles>
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
                                                    <CardActions>
                                                        <Button  dense color="primary"  onClick={this.handleClickOpen}>
                                                            Enroll
                                                        </Button>
                                                        <Dialog
                                                            fullScreen
                                                            open={this.state.open}
                                                            onRequestClose={this.handleRequestClose}
                                                            transition={<Slide direction="up" />}
                                                        >
                                                            <AppBar className={classes.appBar}>
                                                                <Toolbar>
                                                                    <IconButton color="contrast" onClick={this.handleRequestClose} aria-label="Close">
                                                                        <CloseIcon />
                                                                    </IconButton>
                                                                    <Typography type="title" color="inherit" className={classes.flex}>
                                                                        Enroll
                                                                    </Typography>
                                                                    <Button color="contrast" onClick={this.handleRequestClose}>
                                                                        Submit
                                                                    </Button>
                                                                </Toolbar>
                                                            </AppBar>
                                                            <MyForum>
                                                            </MyForum>
                                                        </Dialog>
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
                                                        <Button  dense color="primary"  onClick={this.handleClickOpen}>
                                                            Enroll
                                                        </Button>
                                                        <Dialog
                                                            fullScreen
                                                            open={this.state.open}
                                                            onRequestClose={this.handleRequestClose}
                                                            transition={<Slide direction="up" />}
                                                        >
                                                            <AppBar className={classes.appBar}>
                                                                <Toolbar>
                                                                    <IconButton color="contrast" onClick={this.handleRequestClose} aria-label="Close">
                                                                        <CloseIcon />
                                                                    </IconButton>
                                                                    <Typography type="title" color="inherit" className={classes.flex}>
                                                                        Enroll
                                                                    </Typography>
                                                                    <Button color="contrast" onClick={this.handleRequestClose}>
                                                                        Submit
                                                                    </Button>
                                                                </Toolbar>
                                                            </AppBar>
                                                            <MyForum>
                                                            </MyForum>
                                                        </Dialog>
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
                                                        <Button  dense color="primary"  onClick={this.handleClickOpen}>
                                                            Enroll
                                                        </Button>
                                                        <Dialog
                                                            fullScreen
                                                            open={this.state.open}
                                                            onRequestClose={this.handleRequestClose}
                                                            transition={<Slide direction="up" />}
                                                        >
                                                            <AppBar className={classes.appBar}>
                                                                <Toolbar>
                                                                    <IconButton color="contrast" onClick={this.handleRequestClose} aria-label="Close">
                                                                        <CloseIcon />
                                                                    </IconButton>
                                                                    <Typography type="title" color="inherit" className={classes.flex}>
                                                                        Enroll
                                                                    </Typography>
                                                                    <Button color="contrast" onClick={this.handleRequestClose}>
                                                                        Submit
                                                                    </Button>
                                                                </Toolbar>
                                                            </AppBar>
                                                            <MyForum>
                                                            </MyForum>
                                                        </Dialog>
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
                                                        <Button  dense color="primary"  onClick={this.handleClickOpen}>
                                                            Enroll
                                                        </Button>
                                                        <Dialog
                                                            fullScreen
                                                            open={this.state.open}
                                                            onRequestClose={this.handleRequestClose}
                                                            transition={<Slide direction="up" />}
                                                        >
                                                            <AppBar className={classes.appBar}>
                                                                <Toolbar>
                                                                    <IconButton color="contrast" onClick={this.handleRequestClose} aria-label="Close">
                                                                        <CloseIcon />
                                                                    </IconButton>
                                                                    <Typography type="title" color="inherit" className={classes.flex}>
                                                                        Enroll
                                                                    </Typography>
                                                                    <Button color="contrast" onClick={this.handleRequestClose}>
                                                                        Submit
                                                                    </Button>
                                                                </Toolbar>
                                                            </AppBar>
                                                            <MyForum>
                                                            </MyForum>
                                                        </Dialog>
                                                        <Button dense color="primary">
                                                            Learn More
                                                        </Button>
                                                    </CardActions>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <GridList cellHeight={500} className={classes.gridList} cols={2}>
                                        {this.tileDataFirstRow.map(tile => (
                                            <GridListTile key={tile.img} cols={0}>
                                                <img src={tile.img} alt={tile.title} />
                                            </GridListTile>
                                        ))}
                                        {this.tileDataFirstRow.map(tile => (
                                            <GridListTile key={tile.img} cols={1}>
                                                <h1 className={classes.quote} >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"</h1>
                                            </GridListTile>
                                        ))}
                                    </GridList>
                                    <GridList cellHeight={500} className={classes.gridList} cols={2}>
                                        {this.tileDataSecondRow.map(tile => (
                                            <GridListTile key={tile.img} cols={tile.cols || 0 }>
                                                <h1 className={classes.quote} >" Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h1>
                                            </GridListTile>
                                        ))}
                                        {this.tileDataSecondRow.map(tile => (
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