import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import LoadingScene from './routes/LoadingScene';
import Home from './routes/home';
import Game from './routes/game'
import LevelsList from './routes/levels';
import Complexity from './routes/complexity';


const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="LoadingScene" component={LoadingScene} header={null} initial={true} hideNavBar={true} />
            <Scene key="home" component={Home} header={null} hideNavBar={false}/>
            <Scene key="complexity" component={Complexity} header={null} hideNavBar={false}/>
            <Scene key="levelsList" component={LevelsList} header={null} hideNavBar={false}/>
            <Scene key="game" component={Game} header={null} hideNavBar={false}/>
        </Scene>
    </Router>
);
export default Routes;
