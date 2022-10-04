import {TPost} from "./reducer";
import {HYDRATE} from "next-redux-wrapper";

export const enum PostsActionTypes {
    FAILURE = 'FAILURE',
    LOAD_DATA = 'LOAD_DATA',
    LOAD_DATA_SUCCESS ='LOAD_DATA_SUCCESS',
    LOAD_ONE_POST = 'LOAD_ONE_POST',
    LOAD_ONE_POST_SUCCESS = 'LOAD_ONE_POST_SUCCESS',
    HYDRATE = 'HYDRATE',
}

interface LoadPostsAction {
    type: PostsActionTypes.LOAD_DATA
}

interface LoadOnePostAction {
    type: PostsActionTypes.LOAD_ONE_POST
}
interface ErrorAction {
    type: PostsActionTypes.FAILURE,
    payload: string
}
interface LoadOnePostSuccessAction {
    type: PostsActionTypes.LOAD_ONE_POST_SUCCESS,
    payload: TPost
}
interface LoadPostsSuccessAction {
    type: PostsActionTypes.LOAD_DATA_SUCCESS,
    payload: TPost[]
}
interface HYDRATEAction {
    type: typeof HYDRATE,
    payload: any
}
export type PostsActions = LoadPostsAction | HYDRATEAction | LoadOnePostAction | LoadPostsSuccessAction | LoadOnePostSuccessAction | ErrorAction

export function failure(error: unknown) {
    return {
        type: PostsActionTypes.FAILURE,
        error,
    }
}

export function loadData() {
    return { type: PostsActionTypes.LOAD_DATA }
}
