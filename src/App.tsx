import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Settings} from "./components/settings/Settings";
import s from "./components/button/Button.module.css";
import style from "./components/counter/Counter.module.css";
import {Button} from "./components/button/Button";


function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)

    const [count, setCount] = useState<number>(startValue)

    function onChangeMaxValueHandler(event: ChangeEvent<HTMLInputElement>) {
        setMaxValue(Number(event.currentTarget.value))
    }

    function onChangeStartValueHandler(event: ChangeEvent<HTMLInputElement>) {
        setStartValue(Number(event.currentTarget.value))
    }

    function setNewValue() {
        setCount(startValue)
    }


    function increaseFunction() {
        count < maxValue && setCount(count + 1)
    }

    function resetFunction() {
        setCount(startValue)
    }

    const classNameForInc = `
    ${s.button}
    ${count === maxValue ? s.disabled : ''}
    `

    const classNameForReset = `
    ${s.button}
    ${count === startValue ? s.disabled : ''}
    `

     return (
         <div className="App">
             <div className={style.block}>
                 <div className={style.settings}>
                     <form>
                         <label htmlFor={'maxValue'}>max value: </label>
                         <input id={'maxValue'}
                                type={'number'}
                                value={maxValue}
                                onChange={onChangeMaxValueHandler}
                         />

                         <label htmlFor={'startValue'}>start value: </label>
                         <input id={'startValue'}
                                type={'number'}
                                value={startValue}
                                onChange={onChangeStartValueHandler}
                         />
                     </form>
                 </div>
                 <div className={style.frame}>
                     <Button title={'set'}
                             onClick={setNewValue}
                             className={s.button}/>
                 </div>
             </div>
             <div className={style.block}>
                 <div className={style.count} style={{color: count === maxValue ? 'darkred' : ''}}>{count}</div>
                 <div className={style.frame}>
                     <Button title={'inc'}
                             onClick={increaseFunction}
                             className={classNameForInc}/>

                     <Button title={'reset'}
                             onClick={resetFunction}
                             className={classNameForReset}/>
                 </div>
             </div>
         </div>
     );
}

export default App;


// function App() {
//     // useEffect(() => {
//     //     let newMaxValue = localStorage.getItem('maxValue')
//     //     if (newMaxValue) {
//     //         setPresetMaxValue(JSON.parse(newMaxValue))
//     //     }
//     //     let newStartValue = localStorage.getItem('startValue')
//     //     if (newStartValue) {
//     //         setPresetStartValue(JSON.parse(newStartValue))
//     //     }
//     //
//     // }, [])
//
//
//     const [presetMaxValue, setPresetMaxValue] = useState(0);
//     const [presetStartValue, setPresetStartValue] = useState(0);
//
//
//     function changePresetMaxValue(maxValue: number): void {
//         setPresetMaxValue(maxValue);
//         // localStorage.setItem('maxValue', JSON.stringify(maxValue))
//
//
//     }
//
//     function changePresetStartValue(startValue: number): void {
//         setPresetStartValue(startValue)
//         // localStorage.setItem('startValue', JSON.stringify(startValue))
//     }
//
//
//     return (
//         <div className="App">
//             <Settings
//                 // presetMaxValue={presetMaxValue}
//                 // presetStartValue={presetStartValue}
//                 changePresetMaxValue={changePresetMaxValue}
//                 changePresetStartValue={changePresetStartValue}
//                 // setPresetMaxValue={setPresetMaxValue}
//                 // setPresetStartValue={setPresetStartValue}
//             />
//             <Counter
//                 presetMaxValue={presetMaxValue}
//                 presetStartValue={presetStartValue}
//             />
//         </div>
//     );
// }
//
// export default App;
