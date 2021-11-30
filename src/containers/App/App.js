import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import { Home } from '../../pages/Home';
import { View } from '../../pages/View';


const Routes = () => {
    return (
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/home"/>
                </Route>
                <Route path="/home" exact>
                    <Home/>
                </Route>
                <Route path="/country/:id">
                    <View/>
                </Route>
            </Switch>
    );
};

export const App = () => (
    <Router>
        <Routes />
    </Router>
);