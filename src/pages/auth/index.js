import React, { useEffect, useState } from "react"
import app from "../../base"

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [pending, setPending] = useState(true)

    useEffect(() => {
        app.auth().onAuthStateChanged(user => {
            setCurrentUser(user)
            setPending(false)
        })
    }, [])

    if (pending) {
        return <div className="d-flex justify-content-center align-items-center" style={{height: "100vh", width: "100vw"}}><img src={require("../../assets/images/loading.gif")} alt="Who are you?" width="100px"/></div>
    }

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}
