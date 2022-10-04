// @ts-nocheck
import React from 'react';
import {wrapper} from "../../redux/store";
import {PostsActionTypes} from "../../redux/actions";
import {END} from "redux-saga";
import Post from "../../components/Posts/Post";

const OnePost = () => {
    return (
        <div>
           <Post />
        </div>
    );
};

export default OnePost;

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    async ({params}) => {
        if (!store.getState().onePost) {
            store.dispatch({ type: PostsActionTypes.LOAD_ONE_POST, id: params?.id })
            store.dispatch(END)
        }
        await store.sagaTask.toPromise()
    }

)
