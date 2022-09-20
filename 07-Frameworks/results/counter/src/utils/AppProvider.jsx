import {createContext, useEffect, useReducer} from "react";

const initialState = {
    count: 0,
    minValue: 0,
    maxValue: 10
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            }
        case 'decrement': {
            return {
                ...state,
                count: state.count - 1
            }
        }
        case 'setValue': {
            return {
                ...state,
                count: action.payload
            }
        }
        case 'setMaxValue': {
            return {
                ...state,
                maxValue: action.payload
            }
        }
        case 'setMinValue': {
            return {
                ...state,
                minValue: action.payload
            }
        }
    }
}

export const StateContext = createContext('context')

function AppProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const count = localStorage.getItem('count')
        const minValue = localStorage.getItem('minValue')
        const maxValue = localStorage.getItem('maxValue')

        dispatch({
            type: 'setValue',
            payload: +count
        })
        dispatch({
            type: 'setMaxValue',
            payload: +maxValue
        })
        dispatch({
            type: 'setMinValue',
            payload: +minValue
        })
    }, [])

    return (
       <StateContext.Provider value={{state, dispatch}}>
           {children}
       </StateContext.Provider>
    );
}

export default AppProvider;
