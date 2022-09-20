import {observer} from "mobx-react-lite";
import {useEffect} from "react";

import ButtonsField from "./components/ButtonsField";
import InputsField from "./components/InputsField";
import ErrorBoundary from "./components/ErrorBoundary";

import counter from './store/counter'

const App = observer(() => {

    useEffect(() => {
        const count = localStorage.getItem('count')
        const minValue = localStorage.getItem('minValue')
        const maxValue = localStorage.getItem('maxValue')

        counter.setValue(+count)
        counter.setMinValue(+minValue)
        counter.setMaxValue(+maxValue)
    }, [])

  return (
    <div>
        <ErrorBoundary >
            <ButtonsField counter={counter}/>
            <InputsField counter={counter}/>
        </ErrorBoundary>
    </div>
  );
})

export default App;
