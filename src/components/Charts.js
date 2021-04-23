import React, { Component } from "react";
import { Bar, Line, Pie } from 'react-chartjs-2'

class Charts extends Component {
    constructor(props){
        super(props);
        this.state = {
          chartData: props.chartData
        }
      }
    render(){
        return (
            <div className='chart'>
                <Bar
                data = {this.state.chartData}
                options= { {
                    maintainAspectRation: true
                } }
                />
                <Line
                data = {this.state.chartData}
                options= { {
                    maintainAspectRation: true
                } }
                />
                <Pie
                data = {this.state.chartData}
                options= { {
                    maintainAspectRation: true
                } }
                />
                </div>
        )
    }
}

export default Charts;

