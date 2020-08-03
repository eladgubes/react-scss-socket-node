import React from 'react';
// import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

export class BarChart extends React.Component {

    render() {

        const options = {
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }

        let data = {
            datasets: [{
                label: 'test1',
                data: [1]
            },
            {
                label: 'test2',
                data: [2]
            }],
            labels: ['label']
        }

        // render(){
            return <Bar data={data} options={options} />
        }
    }
// }