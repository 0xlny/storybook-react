import {Component} from "react";
import './ChatBubble.scss';
import React from "react";

class ChatBubble extends Component {
    render() {
        const bubbleColor = {
            backgroundColor: !this.props.own ? this.props.primaryColor : this.props.secondaryColor,
            color: this.props.own ? this.props.primaryColor : this.props.secondaryColor
        };

        return (
            <div className={"chat-bubble " + (this.props.own ? "right" : "left")}>
                <div className="user">
                    <img src={this.props.img}/>
                </div>
                <div className="bubble" style={bubbleColor}>
                    {this.props.text}
                </div>
            </div>
        );
    }


}

export default ChatBubble;
