import React, {useEffect, useState} from 'react';
import {Button} from "../button/Button";
import s from "../button/Button.module.css";
import style from "./Counter.module.css"

type CounterPropsType = {
    presetMaxValue: number
    presetStartValue: number
}

export const Counter = ({presetMaxValue, presetStartValue}: CounterPropsType) => {

    useEffect(() => {
        let newStartValue = localStorage.getItem('startValue')
        if (newStartValue) {
            setCount(JSON.parse(newStartValue))
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(presetStartValue))
    })

    console.log(presetStartValue)

    let [count, setCount] = useState<number>(0)
    console.log(count)
    function increaseFunction() {
        count < presetMaxValue && setCount(count + 1)
    }

    function resetFunction() {
        setCount(presetStartValue)
    }

    const classNameForInc = `
    ${s.button}
    ${count === presetMaxValue ? s.disabled : ''}
    `

    const classNameForReset = `
    ${s.button}
    ${count === presetStartValue ? s.disabled : ''}
    `

    return (
        <div className={style.block}>
            <div className={style.count} style={{color: count === presetMaxValue ? 'darkred' : ''}}>{count}</div>
            <div className={style.frame}>
                <Button title={'inc'}
                        onClick={increaseFunction}
                        className={classNameForInc}/>

                <Button title={'reset'}
                        onClick={resetFunction}
                        className={classNameForReset}/>
            </div>
        </div>
    );
};
