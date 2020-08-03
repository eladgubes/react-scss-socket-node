import React from 'react';
// import { Doughnut } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

export class PieChart extends React.Component {

    state = {
        categories: null,
        data: null,
        options: null
    }

    componentDidMount() {
        this.setState({ categories: this.props.categories },()=>{
            this.setChart()
        })
        
    }

    setChart = () => {
        const data = {
            labels: this.state.categories.map(category => {
                return category.category
            }),
            datasets: [{
                data: this.state.categories.map(amount => {
                    return amount.amount
                }),
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        };

        const options = {
            maintainAspectRatio: false,
            responsive: false,
            legend: {
                position: 'left',
                labels: {
                    boxWidth: 10
                }
            }
        }

        this.setState({data, options})
    }

    render() {
        // class App extends React.Component {
        return (
            <React.Fragment>
                <h1>{this.props.header}</h1>
                {this.state.options && <div className="pie flex center" style={{ position: 'relative' }}>
                    <Pie data={this.state.data} options={this.state.options} />
                </div >}
            </React.Fragment>
        );
    }
}
// }