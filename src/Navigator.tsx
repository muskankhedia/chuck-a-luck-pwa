import React, {FC} from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Results from "./components/Results";
import Game from "./components/Game";

const Navigator: FC<{}> = () => (
    <Router>
        <Route path="/home" component={ Home }/>
        <Route path="/results" component={ Results }/>
        <Route path="/game" component={ Game }/>
    </Router>
)

export default Navigator;