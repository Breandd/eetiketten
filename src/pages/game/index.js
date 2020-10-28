import React from "react"
import "./game.scss"
import app from "../../base"

class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            farms: null,
            user: app.auth().currentUser
        }

        this.db = app.database()
        this.plantFarm = this.plantFarm.bind(this)
        this.updateColors = this.updateColors.bind(this)
    }


    async componentDidMount () {
        setInterval(() => this.updateColors(), 1000)
        try {
            this.db.ref('farms').on("value", snapshot => {
                let farms = {}

                snapshot.forEach(snap => {
                    const data = snap.val()
                    data["key"] = snap.key
                    farms[data["index"]] = data
                })

                this.setState({ farms })
            })
        } catch (error) {
            console.log(error)
        }

        const farmFields = document.getElementsByClassName("gameField")

        for (let x = 0; x < farmFields.length; x++) {
            farmFields[x].addEventListener('click', e => this.handleClick(e, x))
        }
    }

    handleClick (e, index) {
        const farmFields = document.getElementsByClassName("gameField")

        if (this.state.farms && index in this.state.farms) {
            if (this.getPlantedTime(this.state.farms[index].plantedOn) > 15) {
                farmFields[index].className = "gameField"
                this.db.ref("farms").child(this.state.farms[index].key).remove()
            }
        } else if (this.state.user) {
            farmFields[index].className = "gameField"
            this.plantFarm(index)
        }
    }

    plantFarm (index) {
        if (this.state.user) {
            this.db.ref("farms").push({
                plantedBy: this.state.user.uid,
                plantedOn: Date.now(),
                index
            })
        }
    }

    setFieldState () {
        const farmFields = document.getElementsByClassName("gameField")
        const farmsData = this.state.farms

        for (let x = 0; x < farmFields.length; x++) {
            if (farmsData[x] && farmsData[x]["index"] === x) {
                farmFields[x].classList.add(this.getColor(farmsData[x].plantedOn))
            }
        }
    }

    getColor (plantedOn) {
        const diff = this.getPlantedTime(plantedOn)
        let setClass = "";

        if (diff > 10 && diff < 15) {
            setClass += "growing"
        } else if (diff > 15) {
            setClass += "harvest"
        } else {
            setClass += "seeds"
        }

        return setClass
    }

    getPlantedTime (plantedOn) {
        const now = Date.now()
        return Math.ceil(Math.abs(now - plantedOn) / (1000))
    }

    updateColors () {
        const farmFields = document.getElementsByClassName("gameField")

        if (this.state.farms) {
            for (let x = 0; x < farmFields.length; x++) {
                if (this.state.farms[x] && this.getPlantedTime(this.state.farms.plantedOn) > 15) {
                    const farm = this.state.farms[x]
                    
                    farmFields[farm.index].className = "gameField"
                    console.log(farmFields[farm.index].className)
                    farmFields[farm.index].classList.add(this.getColor(farm.plantedOn))
                }
            }
        }
    }

    render () {
        this.state.farms && this.setFieldState()

        return (
            <section className="section-inner game-section text-center">
                <h1>Eet-iketten Game</h1>
                <div className="container d-flex flex-wrap">
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                    <div className="gameField"></div>
                </div>
                
                <div className="explanation container mt-3">
                    <p>
                        Hierboven vind je de velden om te beginnen met spelen. Klik op een leeg vakje om zaadjes te planten, na een tijdje groeien de plantjes. Wanneer de plantjes volledig gegroeid zijn kan je ze oogsten om vervolgens nieuwe zaadjes te planten.
                    </p>
                </div>

            </section>
        )
    }
}

export default Game
