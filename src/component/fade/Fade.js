import {Component} from "react";
import './Fade.scss';
import React from "react";

class Fade extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentActive: 0,
            colors: ['green', 'blue', 'beach', 'mint', 'pink', 'purple']
        };
    }

    componentDidMount(){
        const me = this;
        let first = true;
        function fade() {
            me.setState({currentActive: (me.state.currentActive + 1) % me.state.colors.length});
            setTimeout(function () {
                fade();
            }, first ? 0 : 5000);
            first = false;
        }
        fade();
    }

    render() {
        return (
            <div className={"fade-component" + (this.props.isBackground ? ' background' : ' component')}>
                {   this.state && this.state.colors &&
                    this.state.colors.map((el, i) => <div key={i} className={el + (this.state && this.state.currentActive === i ? ' current' : '')}/>)
                }
            </div>
        );
    }
}

export default Fade;
