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
                <Link to="/" className="p-2 text-dark"><i className="fas fa-home"></i></Link>
                {currentUser && <Link to="/game" className="p-2 text-dark"><i className="fas fa-gamepad" /></Link>}
                <Link to="/leaderboard" className="p-2 text-dark"><i className="fas fa-medal" /></Link>
                <Link to="/friends" className="p-2 text-dark"><i className="fas fa-user-friends" /></Link>
                {currentUser && <Link to="/chat" className="p-2 text-dark"><i className="fas fa-comments" /></Link>}
                <Link to="/rules" className="p-2 text-dark">Rules</Link>
                {currentUser ?
                    <button onClick={() => app.auth().signOut()} className="btn btn-info ml-2">Logout <i className="fas fa-sign-out-alt" /></button>
                :
                    <Link to="/login" className="btn btn-success ml-2">Login <i className="fas fa-sign-in-alt" /></Link>
                }   
            </nav>
        </div>
    )
}

export default Navigation
