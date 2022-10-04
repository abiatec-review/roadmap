import React, {useState} from 'react';
import {signInWithEmailAndPassword} from "firebase/auth";

interface ISignIn {
    auth: any,
    setUser: (user: string) => void,
    setSignin: (signin: boolean) => void,
    setError: (error:string) => void,
    loginSuccess: () => void
}

const SignIn: React.FC<ISignIn> = ({auth, setUser, setSignin, setError, loginSuccess}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e: React.FormEvent<HTMLFormElement>, email: string, password: string) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user.email ?? '')
                loginSuccess()
            })
            .catch((error) => {
                setError(error.message)
            });
    }

    return (
        <form
            className={'flex flex-col'}
            onSubmit={(e) => signIn(e,email, password)}
        >
            <h2 className={'text-center text-3xl m-3 text-blue-500'}>Sign In</h2>
            <label className={'flex flex-col  items-center'}>
                Email
                <input
                    className={'border-2 hover:border-blue-300 border-blue-200 rounded p-1 outline-none'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type={'email'}
                />
            </label>
            <label className={'flex flex-col  items-center'}>
                Password
                <input
                    className={'border-2 hover:border-blue-300 border-blue-200 rounded p-1 outline-none'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={'password'}
                />
            </label>
            <button
                className={'p-2 hover:bg-blue-300 bg-blue-200 m-3 rounded-2xl text-white text-xl'}
                type={'submit'}
            >
                Submit
            </button>
            <div className={'hover:text-blue-500 cursor-pointer'} onClick={() => {
                setError('')
                setSignin(false)
            }}>Dont have an account? Go to sign Up</div>
        </form>
    );
};

export default SignIn;