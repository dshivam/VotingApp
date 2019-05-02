import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

class DoughnutChart extends Component {
    render() {
        const label = this.props.data.options.map((item) => {
            return item.option;
        });
        const votes = this.props.data.options.map((item) => {
            return item.vote;
        });
        const colors = this.props.data.options.map((item) => {
            return item.color;
        });

        const data = {
            labels: label,
            datasets: [
                {
                    data: votes,
                    backgroundColor: colors,
                    hoverBackgroundColor: colors
                }]
           };
           return (
               <div>
                   <Doughnut data={data}/>
               </div>
           );
    }
}
export default DoughnutChart;


