import React from "react"
import "./game.scss"
import app from "../../base"

class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            farms: null
        }

        this.db = app.database()
    }


    async componentDidMount () {
        try {
            this.db.ref('farms').on("value", snapshot => {
                let farms = []

                snapshot.forEach(snap => {
                    farms.push(snap.val())
                })
                
                this.setState({ farms })
            })
        } catch (error) {
            console.log(error)
        }
    }

    setFieldState () {
        const farmFields = document.getElementsByClassName("gameField")
        const farmsData = this.state.farms

        for (let x = 0; x < farmsData.length && x < farmFields.length; x++) {
            farmFields[x].classList.add("border-primary")
        }
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
            </div>
        )
    }
}

export default Game
