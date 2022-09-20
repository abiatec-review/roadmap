import axios from "axios";
import {postsSlice} from "./postsSlice";

export const fetchPosts = () => async (dispatch) => {
    try {
        dispatch(postsSlice.actions.postsFetching())
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch(postsSlice.actions.postsFetchingSuccess(res.data))
    } catch (e) {
        dispatch(postsSlice.actions.postsFetchingError(e.message))
    }
}