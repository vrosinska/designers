import React from 'react';
import Navigation from "./components/Nav/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";


function App() {
    return (
        <div className="App">
            <Navigation/>
            <Home/>
            <About/>
            <Footer/>
        </div>
    );
}

export default App;
