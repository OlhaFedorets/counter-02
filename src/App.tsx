import React from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Settings} from "./components/settings/Settings";


function App() {

    return (
        <div className="App">
            <Settings/>
            <Counter/>
        </div>
    );
}

export default App;
