import '../styles/globals.css'
import {wrapper} from "../redux/store";
import React, {useEffect, useState} from "react";
import {createFirebaseApp} from "../utils/firebaseConfig";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useRouter} from "next/router";
import Loader from "../components/Loader/Loader";
import {AppProps} from "next/app";

type TUser = {
    user: string;
    setUser: (user: string) => void
}
type TLoader = {
    isLoader: boolean;
    setIsLoader: (isLoader: boolean) => void
}

export interface IContextValue {
    user: TUser,
    auth: any,
    loader: TLoader
}
const defaultContext: IContextValue = {
    user: {
        user: '',
        setUser: () => {}
    },
    auth: {},
    loader: {
        isLoader: false,
        setIsLoader: () => {}
    }
}

export const AppContext = React.createContext(defaultContext)

 function MyApp({ Component, pageProps }: AppProps) {

     const [user, setUser] = useState('')
     const app = createFirebaseApp()
     const auth = getAuth(app)
     const [isLoader, setIsLoader] = useState(true)

     const router = useRouter()

     useEffect(() => {
         onAuthStateChanged(auth, (user) => {
             if (user) {
                 setUser(user.email ?? '')
                 setIsLoader(false)
             } else {
                 router.push('/sign')
                 setIsLoader(false)
             }
         });
     }, [auth, router])

     const contextValue = {
         user: {
             user,
             setUser
         },
         auth,
         loader: {
             isLoader, setIsLoader
         }
     }

    return (
        <AppContext.Provider value={contextValue}>
            {isLoader ? <Loader /> : <Component {...pageProps} />}

        </AppContext.Provider>
        )
}

export default wrapper.withRedux(MyApp)