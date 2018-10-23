import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import HomeView from './views/Home';
import TeamsView from './views/Teams';

const Routes = () =>
    <>
        <Route exact path="/" component={HomeView} />
        <Route path="/teams" component={TeamsView} />
    </>

const App = ({ store }) =>
    <BrowserRouter className="site">
        <>
            <header><Navbar /></header>
            <main className="site-content padding">
                {Routes}
            </main>
            <footer><Footer /></footer>
        </>
    </BrowserRouter>

export default App;