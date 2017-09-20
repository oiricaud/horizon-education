import React, { Component } from 'react';
import './App.css'
import PropTypes from 'prop-types';
import {BrowserRouter, Route } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import HomeView from './views/home.jsx';
import HoursView from './views/hours.jsx';
import CallView from './views/call.jsx';
import DirectionsView from './views/directions.jsx';
import MySideBar from './components/sidebar.jsx';
import MyFooter from './components/footer.jsx';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-106748981-1');


const styles = theme => ({
    root: {
        marginTop: 0,
        width: '100%',
        backgroundColor:'#fff',
    },
    appBar: {
        height: 60,
    },
});

class App extends Component {

    render() {
        const classes = this.props.classes;
        return (
            <BrowserRouter>
            <div className={classes.root}>
                <MySideBar>
                </MySideBar>
                <Route exact path='/' render={() => <HomeView> </HomeView>} />
                <Route
                    exact
                    path='/hours'
                    render={() => <HoursView> </HoursView>}
                />
                <Route
                    exact
                    path='/call'
                    render={() => <CallView> </CallView>}
                />
                <Route
                    exact
                    path='/reviews'
                    render={() => <h1> Reviews </h1>}
                />
                <Route
                    exact
                    path='/mail'
                    render={() => <h1> Mail </h1>}
                />
                <Route
                    exact
                    path='/directions'
                    render={() => <DirectionsView> </DirectionsView>}
                />
                <MyFooter>
                </MyFooter>
            </div>
        </BrowserRouter>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);