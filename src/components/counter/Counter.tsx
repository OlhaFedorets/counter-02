import React, {useState} from 'react';
import {Button} from "../button/Button";
import s from "../button/Button.module.css";
import style from "./Counter.module.css"

export const Counter = () => {
    const [count, setCount] = useState<number>(0)

    function increaseFunction() {
        count < 5 && setCount(count + 1)
    }

    function resetFunction() {
        setCount(0)
    }

    const classNameForInc = `
    ${s.button}
    ${count === 5 ? s.disabled : ''}
    `

    const classNameForReset = `
    ${s.button}
    ${count === 0 ? s.disabled : ''}
    `

    return (
        <div className={style.block}>
            <div className={style.count} style={{color: count === 5 ? 'darkred' : ''}}>{count}</div>
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
