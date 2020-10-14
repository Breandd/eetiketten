import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div
            className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">Eet-iketten</h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <Link to="/" className="p-2 text-dark">Home</Link>
                <button className="p-2 text-dark">Link</button>
                <button className="p-2 text-dark" id="login">Login</button>
                <Link to="/leaderboard" className="p-2 text-dark">Leaderboard</Link>
                <Link to="/friends" className="p-2 text-dark">Friends</Link>
            </nav>
        </div>
    )
}

export default Navigation
