import {useContext} from "react";
import {StateContext} from "../../utils/AppProvider";
import './style.css';

const ButtonsField = () => {
    const {state, dispatch} = useContext(StateContext)

    const increment = () => {
        if(state.count < state.maxValue) {
            dispatch({type: 'increment'})
            localStorage.setItem('count', state.count + 1)
        }
    }
    const decrement = () => {
        if(state.count > state.minValue) {
            dispatch({type: 'decrement'})
            localStorage.setItem('count', state.count - 1)
        }
    }
    return (
        <div className={'block-btn'}>
            Count {state?.count}
            <button className={'btn'} onClick={increment}>plus</button>
            <button className={'btn'}  onClick={decrement}>minus</button>
        </div>
    )
}

export default ButtonsField