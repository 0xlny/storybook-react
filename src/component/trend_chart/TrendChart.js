import {Component} from "react";
import './TrendChart.scss';
import React from "react";
import {Line} from "react-chartjs-2";

class TrendChart extends Component {
    render() {
        const base = 70;
        const minValue = Math.min( ...this.props.data );
        let min = minValue - base;
        const data = (canvas) => {
            const ctx = canvas.getContext("2d");
            const gradientStroke = ctx.createLinearGradient(0, 0, 200, 0);
            const firstValue = this.props.data[0];
            const lastValue = this.props.data[this.props.data.length - 1];
            if(lastValue >= firstValue){
                gradientStroke.addColorStop(0, "#429321");
                gradientStroke.addColorStop(1, "#B4EC51");
            }else{
                gradientStroke.addColorStop(0, "#A600FF");
                gradientStroke.addColorStop(1, "#F551A7");
            }

            return {
                labels: this.props.data,
                datasets: [{
                    data: this.props.data,
                    backgroundColor: 'transparent',
                    borderColor: gradientStroke,
                    pointBorderColor: gradientStroke,
                    pointBackgroundColor: gradientStroke,
                    pointHoverBackgroundColor: gradientStroke,
                    pointHoverBorderColor: gradientStroke,
                }
                ]
            }
        };

        const options = {
            elements: { point: { radius: 0 } },
            tooltips: {
                enabled: false
            },
            maintainAspectRatio: false,
            responsive:false,
            scales: {
                xAxes: [{
                    display: false
                }],
                yAxes: [{
                    display: false,
                    ticks: {
                        min: min
                    }
                }]
            },
            legend: {
                display: false,
            },
        };

        return (
            <div className="trend-chart">
                <Line
                    width={this.props.width} height={this.props.height}
                    options={options}
                    data={data}/>
            </div>
        );
    }
}

export default TrendChart;