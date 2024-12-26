import React, {ChangeEvent, useEffect, useState} from 'react';
import style from "../counter/Counter.module.css";
import {Button} from "../button/Button";
import s from "../button/Button.module.css";

type SettingsTypeProps = {}

export const Settings = ({}: SettingsTypeProps) => {
    const [maxValue, setMaxValue] = useState('0');
    const [startValue, setStartValue] = useState('0');

    const classNameForSet = `
     ${s.button}
     `

    useEffect(() => {
        let newMaxValue = localStorage.getItem('maxValue')
        if (newMaxValue) {
            setMaxValue(JSON.parse(newMaxValue))
        }
 let newStartValue = localStorage.getItem('startValue')
        if (newStartValue) {
            setStartValue(JSON.parse(newStartValue))
        }

    }, [])

    function onChangeMaxValueHandler(event: ChangeEvent<HTMLInputElement>) {
        setMaxValue(event.currentTarget.value)

    }

    function onChangeStartValueHandler(event: ChangeEvent<HTMLInputElement>) {
        setStartValue(event.currentTarget.value)
    }




    function onClickHandler() {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }


    return (
        <div className={style.block}>
            <div className={style.settings}>
                <form>
                    <label htmlFor={'maxValue'}>max value:</label>
                    <input id={'maxValue'}
                           type={'number'}
                           value={maxValue}
                           onChange={onChangeMaxValueHandler}
                    />

                    <label htmlFor={'startValue'}>start value:</label>
                    <input id={'startValue'}
                           type={'number'}
                           value={startValue}
                           onChange={onChangeStartValueHandler}
                    />
                </form>
            </div>
            <div className={style.frame}>
                <Button title={'set'}
                        onClick={onClickHandler}
                        className={classNameForSet}/>
            </div>
        </div>

    );
};
