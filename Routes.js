import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Home from './routes/home';
import Game from './routes/game'
import LevelsList from './routes/levels';
import Complexity from './routes/complexity';

const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="home" component={Home} header={null} initial={true}/>
            <Scene key="complexity" component={Complexity} header={null}/>
            <Scene key="levelsList" component={LevelsList} header={null}/>
            <Scene key="game" component={Game} header={null}/>
        </Scene>
    </Router>
);
export default Routes;
