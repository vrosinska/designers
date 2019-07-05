import React from 'react';
import Navigation from "./components/Nav/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Offer from "./components/Offer/Offer";
import Portfolio from "./components/Portfolio/Portfolio";
import {
    Route,
    Switch,
    HashRouter
} from "react-router-dom";


function App() {
    return (
        <HashRouter>
            <div className="App">
                <Navigation/>
                <div className="Content">
                    <Switch>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/offer" component={Offer}/>
                        <Route exact path="/portfolio" component={Portfolio}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </HashRouter>
    );
}

export default App;
