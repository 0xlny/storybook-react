import {Component} from "react";
import './Fade.scss';
import React from "react";

class Fade extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentActive: 0
        };
    }

    componentDidMount(){
        const me = this;
        let first = true;
        function fade() {
            me.setState({currentActive: (me.state.currentActive + 1) % 6});
            setTimeout(function () {
                first = false;
                fade();
            }, first ? 0 : 5000);
        }
        fade();
    }

    render() {
        return (
            <div className={"fade-component" + (this.props.isBackground ? ' background' : ' component')}>
                <div className={'green' + (this.state && this.state.currentActive === 0 ? ' current' : '')}/>
                <div className={'blue' + (this.state && this.state.currentActive === 1 ? ' current' : '')}/>
                <div className={'beach' + (this.state && this.state.currentActive === 2 ? ' current' : '')}/>
                <div className={'mint' + (this.state && this.state.currentActive === 3 ? ' current' : '')}/>
                <div className={'pink' + (this.state && this.state.currentActive === 4 ? ' current' : '')}/>
                <div className={'purple' + (this.state && this.state.currentActive === 5 ? ' current' : '')}/>
            </div>
        );
    }
}

export default Fade;
