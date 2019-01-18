import {Component} from "react";
import './MaterialRadio.scss';
import React from "react";
import {Line} from "react-chartjs-2";

class MaterialRadio extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: 0
        }
    }

    handleChange(id) {
        this.setState({
            selected: id
        });

        this.props.onChange(id, this.props.data[id]);
    }

    render() {
        return (
            <div className="material-radio">
                <div className="title">{this.props.title}</div>
                <div className="container">
                    { this.props && this.props.data &&
                        this.props.data.map((el, i) => {
                            return (
                                <div className="group">
                                    <div key={"wrapper-" + i} className="radio-wrapper">
                                        <input checked={i === this.state.selected} onChange={ () => this.handleChange(i) }  key={"radio-" + i} type="radio" className="radio" id={"radio-" + i} name="group"/>
                                        <label key={i} htmlFor={"radio-" + i}></label>
                                    </div>
                                    <div className="label-wrapper">
                                        <span>{this.props.data[i]}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default MaterialRadio;
