import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import { Home } from '../../pages/Home/Home';
import { View } from '../../pages/View/View';


const Routes = () => {
    return (
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/home"/>
                </Route>
                <Route path="/home" exact>
                    <Home/>
                </Route>
                <Route path="/country/:code">
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

