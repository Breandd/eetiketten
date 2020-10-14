import React from "react"

const Leaderbord = () => {
    return (
        <div className="container d-flex justify-center h-75 rounded"
             style={{width: "100%", overflow: "auto", backgroundColor: "#671B16"}}>
            <table className="table leaderboard" style={{width: "100%"}}>
                <tr class="lead">
                    <th>Status</th>
                    <th>Level</th>
                    <th>Naam</th>
                    <th>Munten</th>
                    <th>Chatfunctie</th>
                    <th>Meer opties</th>
                </tr>
                <tr>
                    <td><img src={require("../../assets/images/gold-medal.png")} alt="Gold medal"/></td>
                    <td>Timon</td>
                    <td>500</td>
                </tr>
                <tr>
                    <td><img src={require("../../assets/images/silver-medal.png")} alt="Silver medal"/></td>
                    <td>Timon</td>
                    <td>500</td>
                </tr>
                <tr>
                    <td><img src={require("../../assets/images/bronze-medal.png")} alt="Bronze medal"/></td>
                    <td>Timon</td>
                    <td>500</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Timon</td>
                    <td>500</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Timon</td>
                    <td>500</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Timon</td>
                    <td>500</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Timon</td>
                    <td>500</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Timon</td>
                    <td>500</td>
                </tr>
            </table>
        </div>
    )
}

export default Leaderbord
