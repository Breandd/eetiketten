import React from "react"
import { Link } from "react-router-dom"

const Leaderbord = () => {
    return (
        <section className="section-inner">
            <div className="shareicon">
                <Link to="/"><img src={require("../../assets/images/share.png")} alt="Share button" className="float-right mr-5" /></Link>
            </div>
            <img className="mx-auto d-block w-5" src={require("../../assets/images/wreath_1.png")} alt="leaderbord" />
            <div className="container d-flex justify-center pb-2 rounded mt-2 leaderboard-background"
                style={{ width: "100%", overflow: "auto", backgroundColor: "#671B16" }}>
                <hr />
                <table className="table leaderboard" style={{ width: "100%" }}>
                    <tbody>
                        {/* <tr class="lead">
                                <th>Status</th>
                                <th>Level</th>
                                <th>Naam</th>
                                <th>Munten</th>
                            </tr> */}
                        <tr>
                            <td><img src={require("../../assets/images/gold-medal.png")} alt="Gold medal" /></td>
                            <td>20</td>
                            <td>Timon</td>
                            <td><img src={require("../../assets/images/money.png")} alt="Gold medal" /> 500</td>
                        </tr>
                        <tr>
                            <td><img src={require("../../assets/images/silver-medal.png")} alt="Silver medal" /></td>
                            <td>20</td>
                            <td>Timon</td>
                            <td><img src={require("../../assets/images/money.png")} alt="Gold medal" /> 500</td>
                        </tr>
                        <tr>
                            <td><img src={require("../../assets/images/bronze-medal.png")} alt="Bronze medal" /></td>
                            <td>20</td>
                            <td>Timon</td>
                            <td><img src={require("../../assets/images/money.png")} alt="Gold medal" /> 500</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>20</td>
                            <td>Timon</td>
                            <td><img src={require("../../assets/images/money.png")} alt="Gold medal" /> 500</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>20</td>
                            <td>Timon</td>
                            <td><img src={require("../../assets/images/money.png")} alt="Gold medal" /> 500</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>20</td>
                            <td>Timon</td>
                            <td><img src={require("../../assets/images/money.png")} alt="Gold medal" /> 500</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>20</td>
                            <td>Timon</td>
                            <td><img src={require("../../assets/images/money.png")} alt="Gold medal" /> 500</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>20</td>
                            <td>Timon</td>
                            <td><img src={require("../../assets/images/money.png")} alt="Gold medal" /> 500</td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <div className="position">
                    <p className="text-white font-weight-bold">Your Position: 5/15</p>
                </div>
            </div>
        </section>
    )
}

export default Leaderbord
