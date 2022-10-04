// @ts-nocheck

import type { NextPage } from 'next'
import {wrapper} from "../redux/store";
import {loadData} from "../redux/actions";

import {END} from "redux-saga";
import PostsInfo from "../components/Posts/PostsInfo";

type Posts = {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface IPosts {
    posts: Posts[]
}

const Posts: NextPage<IPosts> = () => {
    return (
        <div >
            Зщыеы
           <PostsInfo />
        </div>
    )
}

export const getStaticProps = wrapper.getStaticProps((store) =>
    async () => {
        if (!store.getState().posts) {
            store.dispatch(loadData())
            store.dispatch(END)
        }
        await store.sagaTask.toPromise()
    }
)

export default Posts
