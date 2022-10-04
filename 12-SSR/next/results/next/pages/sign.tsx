import type { NextPage } from 'next'
import React, {useContext, useState} from "react";
import {useRouter} from "next/router";

import {AppContext} from "./_app";

import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";

const Sign: NextPage = () => {
    const [signin, setSignin] = useState(true)
    const {user: {setUser}, auth} = useContext(AppContext)
    const [error, setError] = useState('')
    const router = useRouter()
    const loginSuccess = () => {
        router.push('/')
    }
    return (
        <div className={'flex items-center justify-center '}>
            <div className={'flex flex-col items-center justify-center p-8 border-2 items-center  w-full m-3 lg:m-0 lg:mt-[10%] mt-[10%] lg:w-1/3 rounded-2xl'}>
                {signin ?
                    <SignIn
                        auth={auth}
                        setUser={setUser}
                        setSignin={setSignin}
                        setError={setError}
                        loginSuccess={loginSuccess}
                    /> :
                    <SignUp
                        auth={auth}
                        setUser={setUser}
                        setSignin={setSignin}
                        setError={setError}
                        loginSuccess={loginSuccess}
                    />
                }
                {error && <div className={'m-2 text-red-500'}>{error}</div>}
            </div>
        </div>
    )
}

export default Sign
