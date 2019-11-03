import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';

export class Chart extends Component {
  constructor() {
    super();
    this.state = {
      stat: ''
    }
  }

  render() {
    const { players, stats } = this.props;
    let n = 0;
    stats.forEach(stat => {
      let id = Object.keys(stat);
      if (stat[id].length > n) {
        n = stat[id].length
      }
    })

    let labels = 

    console.log(n)

    let data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    }

    return (
      <div>
        <h2>Line Example</h2>
        <Line data={data} />
      </div>
    );
  }
};

const mapStateToProps = ({ players }) => ({
  players
})

export default connect(mapStateToProps)(Chart)