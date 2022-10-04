import {PostsActions, PostsActionTypes} from './actions'
import { HYDRATE } from 'next-redux-wrapper'

export type TPost = {
    title: string;
    body: string;
    image: string;
    imageBody: string;
    footer: string;
    id: string
}

interface IPostsReducer {
    error: boolean,
    posts: TPost[],
    onePost: TPost | null
}

const initialState: IPostsReducer = {
    error: false,
    posts: [],
    onePost: null
}

function reducer(state = initialState, action: PostsActions) {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload }
        }
        case PostsActionTypes.FAILURE:
            return {
                ...state,
                ...{ error: action.payload },
            }
        case PostsActionTypes.LOAD_DATA_SUCCESS:
            return {
                ...state,
                posts: action.payload,
            }
        case PostsActionTypes.LOAD_ONE_POST_SUCCESS:
            return {
                ...state,
                onePost: action.payload,
            }
        default:
            return state
    }
}

export default reducer

export type RootReducer = ReturnType<typeof reducer>