import {all, put, take, takeLatest} from 'redux-saga/effects'
import { failure, PostsActionTypes} from './actions'

const URL = 'https://633592f58aa85b7c5d1e4efc.mockapi.io/posts'

function* loadDataSaga(): Generator<any, any, any> {
    try {
        const res = yield fetch(URL)
        const data = yield res.json()
        yield put({
            type: PostsActionTypes.LOAD_DATA_SUCCESS,
            payload: data,
        })
    } catch (err) {
        yield put(failure(err))
    }
}
function* loadOnePost({id}: { id: string }): Generator<any, any, any>  {
    try {
        const res = yield fetch(`${URL}/${id}`)
        const data = yield res.json()
        yield put({
            type: PostsActionTypes.LOAD_ONE_POST_SUCCESS,
            payload: data,
        })
    } catch (err) {
        yield put(failure(err))
    }
}

function* rootSaga() {
    yield all([
        //@ts-ignore
        takeLatest(PostsActionTypes.LOAD_ONE_POST, loadOnePost),
        takeLatest(PostsActionTypes.LOAD_DATA, loadDataSaga),
    ])
}

export default rootSaga