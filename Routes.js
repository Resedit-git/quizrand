import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Home from './routes/home';
import Game from './routes/game'
import Complexity from "./routes/complexity";
import Levels from "./routes/levels";

const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="home" component={Home} header={null} initial={true}/>
            <Scene key="level" component={Levels} header={null}/>
            <Scene key="complexity" component={Complexity} header={null}/>
            <Scene key="game" component={Game} header={null}/>
        </Scene>
    </Router>
);
export default Routes;
