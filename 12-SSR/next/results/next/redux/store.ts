import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'
import {createWrapper} from 'next-redux-wrapper'

import rootReducer from './reducer'
import rootSaga from './saga'

const bindMiddleware = (middleware: SagaMiddleware<object>[]) => {

    return applyMiddleware(...middleware)
}

export const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]))
    //@ts-ignore
    store.sagaTask = sagaMiddleware.run(rootSaga)

    return store
}

export const wrapper = createWrapper(makeStore, { debug: true })