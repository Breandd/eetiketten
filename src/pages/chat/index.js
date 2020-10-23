import React, { Component } from "react";
import app from "../../base"

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: app.auth().currentUser,
            chats: [],
            content: '',
            readError: null,
            writeError: null
        };

        this.db = app.database()
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        this.setState({ readError: null });
        try {
            this.db.ref("chats").on("value", snapshot => {
                let chats = [];
                snapshot.forEach((snap) => {
                    chats.push(snap.val());
                });
                this.setState({ chats });
            });
        } catch (error) {
            this.setState({ readError: error.message });
        }
    }

    handleChange(event) {
        this.setState({
            content: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ writeError: null });
        try {
            await this.db.ref("chats").push({
                content: this.state.content,
                timestamp: Date.now(),
                uid: this.state.user.uid,
                name: this.state.user.displayName
            });
            this.setState({ content: '' });
        } catch (error) {
            this.setState({ writeError: error.message });
        }
    }

    render() {
        return (
            <div style={{backgroundColor: '#CEA07E', padding: 50}} className="h-100">
                <div className="chats">
                {
                    this.state.chats.length > 0 ?
                        this.state.chats.map((chat, index) => {
                            const timeconverter = (timestamp) => {
                                var a = new Date(timestamp);
                                var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                                var year = a.getFullYear();
                                var month = months[a.getMonth()];
                                var date = a.getDate();
                                var hour = a.getHours();
                                var reformattedhours = hour < 10 ? `0${hour}` : `${hour}`
                                var min = a.getMinutes();
                                var reformattedminutes = min < 10 ? `0${min}` : `${min}`
                                var sec = a.getSeconds();
                                var reformattedseconds = sec < 10 ? `0${sec}` : `${sec}`

                                var time = date + ' ' + month + ' ' + year + ' ' + reformattedhours + ':' + reformattedminutes + ':' + reformattedseconds ;
                                return time;
                            }
                            var timestamp = chat.timestamp;
                            var formatted = timeconverter(timestamp);

                            return (
                                this.state.user.uid == chat.uid ?
                                    <div key={index} className="message-container send">
                                        <p className="message" style={{ backgroundColor: "#9C5F4A" }} key={chat.timestamp}><strong>{chat.name || "Onbekend"}</strong> <br /> {chat.content} <br /> <i>{formatted}</i></p>
                                    </div>
                                    :
                                    <div key={index} className="message-container receive">
                                        <p className="message" style={{ backgroundColor: '#fff' }} key={chat.timestamp}><strong>{chat.name || "Onbekend"}</strong> <br /> {chat.content} <br /> <i>{formatted}</i></p>
                                    </div>
                            )
                        })
                    :
                    <p>Start een gesprek</p>
                }
                </div>
                <div className="message-form-container">
                    <form className="message-form" onSubmit={this.handleSubmit}>
                        <input className="message-input shadow border-0" maxLength="144" placeholder="Typ een bericht..." type="text" onChange={this.handleChange} value={this.state.content}></input>
                        {this.state.error ? <p>{this.state.writeError}</p> : null}
                        <button className="message-btn border-0" type="submit">Send</button>
                    </form>
                </div>
                <div>
                    {/* Login in as: <strong>{this.state.user.email}</strong> */}
                </div>
            </div>
        );
    }
}

export default Chat;
