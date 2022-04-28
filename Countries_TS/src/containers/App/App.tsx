import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from '../../pages/Home/Home';
import View from '../../pages/View/View';


const AppRoutes = () => (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/country/:code" element={<View/>}></Route>
        </Routes>
    );

const App = () => (
    <Router>
        <AppRoutes/>
    </Router>
);

export default App;
