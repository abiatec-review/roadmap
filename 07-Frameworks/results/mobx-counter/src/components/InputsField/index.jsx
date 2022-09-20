import {observer} from "mobx-react-lite";
import './style.css';

const InputsField = observer( ({counter}) => {

    const changeMaxValue = (e) => {
        if(counter.minValue < e.target.value) {
            counter.setMaxValue(+e.target.value)
            localStorage.setItem('maxValue', e.target.value)
        }
    }
    const changeMinValue = (e) => {
        if(counter.maxValue > e.target.value) {

            counter.setMinValue(+e.target.value)
            localStorage.setItem('minValue', e.target.value)
        }
    }

    const setValue = () => {
        const randomValue = Math.round(Math.random()*(counter.maxValue - counter.minValue)+ counter.minValue);
        counter.setValue(randomValue)
        localStorage.setItem('count', randomValue)
    }
    return (
        <div className={'block-inputs'}>
            <label>
                Max value
                <input value={counter.maxValue} placeholder={'max value'} type={'number'} onChange={changeMaxValue}/>
            </label>
            <label>
                Min value
                <input value={counter.minValue} placeholder={'min value'} type={'number'} onChange={changeMinValue} />
            </label>
            <button style={{width: '200px'}} onClick={setValue}>Set value</button>
        </div>
    )
})

export default InputsField