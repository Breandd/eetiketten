import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from "../../pages/auth"
import app from "../../base"

const Navigation = () => {
    const {currentUser} = useContext(AuthContext)

    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm">
            <Link to="/" className="my-0 mr-md-auto font-weight-normal h5">Eet-iketten</Link>
            <nav className="my-2 my-md-0 mr-md-3">
                <Link to="/" className="p-2 text-dark">Home</Link>
                {currentUser ?
                    <button onClick={() => app.auth().signOut()} className="p-2 text-dark border-0 bg-transparent">Logout</button>
                :
                    <Link to="/login" className="p-2 text-dark">Login</Link>
                }
                <Link to="/leaderboard" className="p-2 text-dark">Leaderboard</Link>
                <Link to="/friends" className="p-2 text-dark">Friends</Link>
                {currentUser && <Link to="/chat" className="p-2 text-dark">Chat</Link>}          
            </nav>
        </div>
    )
}

export default Navigation
