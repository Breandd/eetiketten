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
    }


    async componentDidMount () {
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

        if (index in this.state.farms) {
            if (this.getPlantedTime(this.state.farms[index].plantedOn) > 15) {
                farmFields[index].classList.remove("border-success")
                this.db.ref("farms").child(this.state.farms[index].key).remove()
            }
        } else if (this.state.user) {
            farmFields[index].classList.add("border-info")
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
        let setClass = "border-";

        if (diff > 10 && diff < 15) {
            setClass += "warning"
        } else if (diff > 15) {
            setClass += "success"
        } else {
            setClass += "info"
        }

        return setClass
    }

    getPlantedTime (plantedOn) {
        const now = Date.now()
        return Math.ceil(Math.abs(now - plantedOn) / (1000 * 60))
    }

    render () {
        this.state.farms && this.setFieldState()
        return (
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
        )
    }
}

export default Game
