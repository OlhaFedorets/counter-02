import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Settings} from "./components/settings/Settings";


function App() {
    // useEffect(() => {
    //     let newMaxValue = localStorage.getItem('maxValue')
    //     if (newMaxValue) {
    //         setPresetMaxValue(JSON.parse(newMaxValue))
    //     }
    //     let newStartValue = localStorage.getItem('startValue')
    //     if (newStartValue) {
    //         setPresetStartValue(JSON.parse(newStartValue))
    //     }
    //
    // }, [])


    const [presetMaxValue, setPresetMaxValue] = useState(0);
    const [presetStartValue, setPresetStartValue] = useState(0);


    function changePresetMaxValue(maxValue: number): void {
        setPresetMaxValue(maxValue);
        // localStorage.setItem('maxValue', JSON.stringify(maxValue))


    }

    function changePresetStartValue(startValue: number): void {
        setPresetStartValue(startValue)
        // localStorage.setItem('startValue', JSON.stringify(startValue))
    }


    return (
        <div className="App">
            <Settings
                // presetMaxValue={presetMaxValue}
                // presetStartValue={presetStartValue}
                changePresetMaxValue={changePresetMaxValue}
                changePresetStartValue={changePresetStartValue}
                // setPresetMaxValue={setPresetMaxValue}
                // setPresetStartValue={setPresetStartValue}
            />
            <Counter
                presetMaxValue={presetMaxValue}
                presetStartValue={presetStartValue}
            />
        </div>
    );
}

export default App;
