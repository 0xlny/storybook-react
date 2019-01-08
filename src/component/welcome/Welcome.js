import {Component} from "react";
import './Welcome.scss';
import React from "react";
import {Line} from "react-chartjs-2";

class Welcome extends Component {
    render() {
        return (
            <div className="welcome-page">
                <h1>Welcome to lenny.codes storybook</h1>
                <p>
                    You'll find here all the codes posted on my Instagram
                </p>

                <p>
                    Feel free to check my page: <a href="https://www.instagram.com/lenny.codes/" target="_blank">lenny.codes</a>
                </p>
            </div>
        );
    }
}

export default Welcome;