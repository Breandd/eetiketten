import React, { useState, useEffect } from "react"

const Friends = () => {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            await fetch('https://randomuser.me/api?results=25', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            )
                .then(res => res.json())
                .then(data => {
                    setData(data.results)
                    setLoaded(true)
                })
                .catch((err) => console.log(err))
        }

        fetchData()
    }, [])

    return (
        <section className="section-inner">
            <div className="container friends-container d-flex justify-content-center">
                <table className="friends" style={{ width: "95%" }}>
                    <tbody style={{ display: 'block', height: '384px', overflow: 'auto' }}>
                        {
                            loaded == true ?
                                data.map((item, index) => {
                                    return (
                                        <tr class="individual-friend" key={index}>
                                            <td class="status"><span role="img" aria-label="Online status">{ index < 12 ? "🟢" : "🔴"}</span></td>
                                            <td>{index + 1}</td>
                                            <td>{item.name.first}</td>
                                            <td><img src={require("../../assets/images/money.png")} alt="Currency Icon" />&nbsp;{Math.floor(item.dob.age * Math.random() * 50)}</td>
                                            <td><img onClick={() => console.log(`Chat Function ${index + 1}`)} src={require("../../assets/images/chat.png")} alt="Chat Icon" /></td>
                                            <td><b onClick={() => console.log(`Options ${index + 1}`)}>&bull;&bull;&bull;</b></td>
                                        </tr>
                                    )
                                })
                                :
                                <tr style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}}>
                                    <h1 style={{ color: 'white' }}>Loading...</h1>
                                </tr>
                        }
                    </tbody>
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
        </section>
    )
}

export default Friends
