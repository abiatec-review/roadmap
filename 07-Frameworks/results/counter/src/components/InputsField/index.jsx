import {useContext} from "react";
import {StateContext} from "../../utils/AppProvider";
import './style.css';

const InputsField = () => {
    const {state, dispatch} = useContext(StateContext)

    const changeMaxValue = (e) => {
        if(state.minValue < e.target.value) {
            dispatch({
                type: 'setMaxValue',
                payload: e.target.value
            })
            localStorage.setItem('maxValue', e.target.value)
        }
    }
    const changeMinValue = (e) => {
        if(state.maxValue > e.target.value) {
            dispatch({
                type: 'setMinValue',
                payload: e.target.value
            })
            localStorage.setItem('minValue', e.target.value)
        }
    }

    const setValue = () => {
        const randomValue = Math.round(Math.random()*(state.maxValue - state.minValue)+ state.minValue);
        dispatch({
            type: 'setValue',
            payload: randomValue
        })
        localStorage.setItem('count', randomValue)
    }
    return (
        <div className={'block-inputs'}>
            <label>
                Max value
                <input value={state?.maxValue} placeholder={'max value'} type={'number'} onChange={changeMaxValue}/>
            </label>
            <label>
                Min value
                <input value={state?.minValue} placeholder={'min value'} type={'number'} onChange={changeMinValue} />
            </label>
            <button style={{width: '200px'}} onClick={setValue}>Set value</button>
        </div>
    )
}

export default InputsField