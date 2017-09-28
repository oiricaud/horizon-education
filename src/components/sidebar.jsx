import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import {BrowserRouter, Route, NavLink } from 'react-router-dom'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import PhoneIcon from 'material-ui-icons/Phone';
import AcademicsIcon from 'material-ui-icons/ModeEdit';
import DirectionsIcon from 'material-ui-icons/Directions';
import StarIcon from 'material-ui-icons/Star';
import PersonIcon from 'material-ui-icons/Person';
import MoneyIcon from 'material-ui-icons/AttachMoney';
import HomeIcon from 'material-ui-icons/Home';
import ComputerIcon from 'material-ui-icons/Computer';
import Toolbar from 'material-ui/Toolbar';
import MenuIcon from 'material-ui-icons/Menu';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        marginTop: 0,
        width: '100%',
        backgroundColor:'cornflowerblue',
    },
    card: {
        maxWidth: 400,
    },
    media: {
        height: 300,
        marginBottom:20,
    },
    list: {
        width: 250,
        flex: 'initial',
    },
    listFull: {
        width: 'auto',
        flex: 'initial',
    },
    flex: {
        flex: 1,
        color: '#FAFAFA'
    },
    logoImage:{
        img: process.env.PUBLIC_URL + './icons/horizon-education.jpg',
    }

});

function TabContainer(props) {
    return <div style={{ padding: 20 }}>{props.children}</div>;
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class SideBarItem extends Component {
    state = {
        value: 0,
        open: {
            top: false,
            left: false,
            bottom: false,
            right: false,
        },
        expanded: false
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };
    toggleDrawer = (side, open) => {
        const drawerState = {};
        drawerState[side] = open;
        this.setState({ open: drawerState });
    };
    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    handleLeftOpen = () => this.toggleDrawer('left', true);
    handleLeftClose = () => this.toggleDrawer('left', false);


    render(){
        const classes = this.props.classes;
        const { value } = this.state;

        const mailFolderListItems = (
            <div>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={process.env.PUBLIC_URL + 'icons/horizon-black.png'}
                        title="Contemplative Reptile"
                    />
                </Card>
                <NavLink activeClassName='active' exact to='/' >
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <div className={classes.sidebar}>
                           About
                        </div>
                    </ListItem>
                </NavLink>

                <NavLink activeClassName='active' exact to='reviews' >
                    <ListItem button>
                        <ListItemIcon>
                            <AcademicsIcon />
                        </ListItemIcon>
                        <div className={classes.sidebar}>
                            Academics
                        </div>
                    </ListItem>
                </NavLink>

                <NavLink activeClassName='active' exact to='call' >
                    <ListItem button>
                        <ListItemIcon>
                            <PhoneIcon />
                        </ListItemIcon>
                        <div className={classes.sidebar}>
                            Admissions
                        </div>
                    </ListItem>
                </NavLink>

                <NavLink activeClassName='active' exact to='directions' >
                    <ListItem button>
                        <ListItemIcon>
                            <DirectionsIcon />
                        </ListItemIcon>
                        <div className={classes.sidebar}>
                            Directions
                        </div>
                    </ListItem>
                </NavLink>

                <NavLink activeClassName='active' exact to='call' >
                    <ListItem button>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <div className={classes.sidebar}>
                            Faculty
                        </div>
                    </ListItem>
                </NavLink>

                <NavLink activeClassName='active' exact to='call' >
                    <ListItem button>
                        <ListItemIcon>
                            <MoneyIcon />
                        </ListItemIcon>
                        <div className={classes.sidebar}>
                            Finance
                        </div>
                    </ListItem>
                </NavLink>

                <NavLink activeClassName='active' exact to='hours'>
                    <ListItem button>
                        <ListItemIcon>
                            <StarIcon />
                        </ListItemIcon>
                        <div className={classes.sidebar}>
                            Mission
                        </div>
                    </ListItem>
                </NavLink>
            </div>
        );
        const otherMailFolderListItems = (
            <div>
                <ListItem button>
                    <ListItemIcon>
                        <ComputerIcon />
                    </ListItemIcon>
                    <ListItemText primary="Careers" />
                </ListItem>
            </div>
        );

        const sideList = (
            <div>
                <List className={classes.list} disablePadding>
                    {mailFolderListItems}
                </List>
                <Divider />
                <List className={classes.list} disablePadding>
                    {otherMailFolderListItems}
                </List>
            </div>
        );

        const fullList = (
            <div>
                <List className={classes.listFull} disablePadding>
                    {mailFolderListItems}
                </List>
                <Divider />
                <List className={classes.listFull} disablePadding>
                    {otherMailFolderListItems}
                </List>
            </div>
        );
        return (
            <div className={classes.root}>
                <Toolbar>
                    <IconButton color="contrast" aria-label="Menu"  onClick={this.handleLeftOpen}>
                        <MenuIcon />
                    </IconButton>
                        <Drawer
                            open={this.state.open.left}
                            onRequestClose={this.handleLeftClose}
                            onClick={this.handleLeftClose}>
                            {sideList}
                        </Drawer>
                    <Typography type="title" className={classes.flex}>
                        Menu
                    </Typography>
                </Toolbar>
            </div>
        )
    }
}


SideBarItem.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,

};

export default withStyles(styles)(SideBarItem);