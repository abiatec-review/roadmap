import {initializeApp} from "@firebase/app";

export const createFirebaseApp = () => {
    const clientCredentials = {
        apiKey: "AIzaSyB3cDOxComrB1Du2G-WPKuN17yncbg1pwY",
        authDomain: "next-task-63044.firebaseapp.com",
        projectId: "next-task-63044",
        storageBucket: "next-task-63044.appspot.com",
        messagingSenderId: "66116943567",
        appId: "1:66116943567:web:7f61590bf4665ecfedc1ba"
    }
    return initializeApp(clientCredentials)
}
