import React, {Component} from 'react';
import './App.css'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {BrowserRouter, Route} from 'react-router-dom'
import NavigationSideBar from './components/sidebar.jsx';
import HomeView from './views/home.jsx';
import AcademicsView from './views/academics.jsx';
import AdmissionsView from './views/admissions.jsx';
import DirectionsView from './views/directions.jsx';
import FacultyView from './views/faculty.jsx';
import FaqView from './views/faq.jsx';
import MyFooter from './components/footer.jsx';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-106748981-1');

const styles = theme => ({
    root: {
        backgroundColor: '#e6ecf0',
    },
});

class App extends Component {
    render() {
        const classes = this.props.classes;
        return (
            <BrowserRouter>
                <div className={classes.root}>
                    <NavigationSideBar>
                    </NavigationSideBar>
                    <Route exact path='/'
                           render={() => <HomeView> </HomeView>}
                    />
                    <Route
                        exact path='/academics'
                        render={() => <AcademicsView> </AcademicsView>}
                    />
                    <Route
                        exact path='/admissions'
                        render={() => <AdmissionsView> </AdmissionsView>}
                    />
                    <Route
                        exact path='/directions'
                        render={() => <DirectionsView> </DirectionsView>}
                    />
                    <Route
                        exact path='/faculty'
                        render={() => <FacultyView> </FacultyView>}
                    />
                    <Route
                        exact path='/faq'
                        render={() => <FaqView> </FaqView>}
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