import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { Split } from 'grommet';
import './App.css';
import Navbar from './navbar/Navbar';
import HomeView from './views/Home';
import TeamsView from './views/Teams';
import TeamView from './views/Team';
import PlayerView from './views/Player';

const Routes = () =>
    <>
        <Route exact path="/" component={HomeView} />
        <Route path="/teams/:id/:player" component={PlayerView} />
        <Route exact path="/teams/:id" component={TeamView} />
        <Route exact path="/teams" component={TeamsView} />
    </>

const App = ({ store }) =>
    <BrowserRouter className="site">
        <Split flex="right">
            <header><Navbar /></header>
            <main className="site-content padding">
                <Routes />
            </main>
        </Split>
    </BrowserRouter>

export default App;