// @ts-nocheck

import type {NextPage} from 'next'
import React, {useContext} from "react";
import {
    signOut
} from "firebase/auth";

import {wrapper} from "../redux/store";
import {loadData} from "../redux/actions";
import {END} from "redux-saga";
import {AppContext} from "./_app";
import Loader from "../components/Loader/Loader";
import PostsInfo from "../components/Posts/PostsInfo";

const Home: NextPage = () => {

    const {user: {user, setUser}, auth, loader: {isLoader}} = useContext(AppContext)

    const signout = () => {
        setUser('')
        signOut(auth).then(() => {

        }).catch((error) => {
            console.log(error)
        });

    }
    if(isLoader) {
        return <Loader />
    }
    return (
        <div className={'w-full'}>
            <header className={'flex justify-between p-3 items-center'}>
                {user && <div className={'text-2xl text-blue-500'}>User: {user}</div> }
                <button className={'p-3 hover:bg-blue-300 bg-blue-200 m-3 rounded-2xl text-white text-l'} onClick={signout}>Sign out</button>
            </header>
            <div className={'flex justify-center w-full'}>
                <PostsInfo />
            </div>

        </div>
    )
}

export const getStaticProps = wrapper.getStaticProps((store) =>
    async () => {
       store.dispatch(loadData())
       store.dispatch(END)
      await store.sagaTask.toPromise()
    }
)

export default Home
