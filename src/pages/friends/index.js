import React from "react"

const Friends = () => {
    return (
        <div className="friendsbody">
            <div className="container friends-container d-flex justify-content-center">
                <table className="friends" style={{width: "90%"}}>
                    <tr>
                        <td><span role="img" aria-label="Online status">🟢</span></td>
                        <td>15</td>
                        <td>Timon</td>
                        <td width="50%">500</td>
                        <td><img src={require("../../assets/images/chat.png")} alt="Chat icon"/></td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td><span role="img" aria-label="Online status">🟢</span></td>
                        <td>15</td>
                        <td>Timon</td>
                        <td>500</td>
                        <td><img src={require("../../assets/images/chat.png")} alt="Chat icon"/></td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td><span role="img" aria-label="Online status">🟢</span></td>
                        <td>15</td>
                        <td>Timon</td>
                        <td>500</td>
                        <td><img src={require("../../assets/images/chat.png")} alt="Chat icon"/></td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td><span role="img" aria-label="Online status">🟢</span></td>
                        <td>15</td>
                        <td>Timon</td>
                        <td>500</td>
                        <td><img src={require("../../assets/images/chat.png")} alt="Chat icon"/></td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td><span role="img" aria-label="Online status">🟢</span></td>
                        <td>15</td>
                        <td>Timon</td>
                        <td>500</td>
                        <td><img src={require("../../assets/images/chat.png")} alt="Chat icon"/></td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td><span role="img" aria-label="Online status">🟢</span></td>
                        <td>15</td>
                        <td>Timon</td>
                        <td>500</td>
                        <td><img src={require("../../assets/images/chat.png")} alt="Chat icon"/></td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td><span role="img" aria-label="Online status">🔴</span></td>
                        <td>15</td>
                        <td>Timon</td>
                        <td>500</td>
                        <td><img src={require("../../assets/images/chat.png")} alt="Chat icon"/></td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td><span role="img" aria-label="Online status">🔴</span></td>
                        <td>15</td>
                        <td>Timon</td>
                        <td>500</td>
                        <td><img src={require("../../assets/images/chat.png")} alt="Chat icon"/></td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td><span role="img" aria-label="Online status">🔴</span></td>
                        <td>15</td>
                        <td>Timon</td>
                        <td>500</td>
                        <td><img src={require("../../assets/images/chat.png")} alt="Chat icon"/></td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td><span role="img" aria-label="Online status">🔴</span></td>
                        <td>15</td>
                        <td>Timon</td>
                        <td>500</td>
                        <td><img src={require("../../assets/images/chat.png")} alt="Chat icon"/></td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td><span role="img" aria-label="Online status">🔴</span></td>
                        <td>15</td>
                        <td>Timon</td>
                        <td>500</td>
                        <td><img src={require("../../assets/images/chat.png")} alt="Chat icon"/></td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td><span role="img" aria-label="Online status">🔴</span></td>
                        <td>15</td>
                        <td>Timon</td>
                        <td>500</td>
                        <td><img src={require("../../assets/images/chat.png")} alt="Chat icon"/></td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td><span role="img" aria-label="Online status">🔴</span></td>
                        <td>15</td>
                        <td>Timon</td>
                        <td>500</td>
                        <td><img src={require("../../assets/images/chat.png")} alt="Chat icon"/></td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td><span role="img" aria-label="Online status">🔴</span></td>
                        <td>15</td>
                        <td>Timon</td>
                        <td>500</td>
                        <td><img src={require("../../assets/images/chat.png")} alt="Chat icon"/></td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td><span role="img" aria-label="Online status">🔴</span></td>
                        <td>15</td>
                        <td>Timon</td>
                        <td>500</td>
                        <td><img src={require("../../assets/images/chat.png")} alt="Chat icon"/></td>
                        <td>...</td>
                    </tr>
                </table>
            </div>
            <div className="container mt-3">
                <h3>Vrienden toevoegen!</h3>
                <form action="" id="addFriends">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Email</span>
                        </div>
                        <input type="email" id="form_email" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-success">Voeg toe</button>
                </form>

            </div>
        </div>
    )
}

export default Friends
