import {observer} from "mobx-react-lite";
import './style.css';

const ButtonsField = observer( ({counter}) => {

    const increment = () => {
        if(counter.count < counter.maxValue) {
            counter.increment()
            localStorage.setItem('count', counter.count)
        }
    }
    const decrement = () => {
        if(counter.count > counter.minValue) {
            counter.decrement()
            localStorage.setItem('count', counter.count)
        }
    }

    return (
        <div className={'block-btn'}>
            Count {counter?.count}
            <button className={'btn'} onClick={increment}>plus</button>
            <button className={'btn'}  onClick={decrement}>minus</button>
        </div>
    )
})

export default ButtonsField