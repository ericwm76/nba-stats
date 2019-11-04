import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

class Chart extends Component {
  constructor() {
    super();
    this.state = {
      labels: [],
      datasets: []
    }
  }

  createLabels(stats) {
    let n = 0;
    let labels = [];

    stats.forEach(stat => {
      let id = Object.keys(stat);
      if (stat[id].length > n) {
        n = stat[id].length
      }
    })

    for (var i = 0; i < n; i++) {
      labels.push("Game " + (i + 1))
    }

    this.setState({ labels: labels })
  }

  createDatasets(players, stats) {
    let datasets = [];

    stats.forEach(stat => {
      let id = parseInt(Object.keys(stat));
      let player = players.find(player => player.id === id);
      let playerName = player.first_name + ' ' + player.last_name;
      let points = stat[id].map(game => game.pts);

      datasets.push({
        label: playerName,
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
        data: points
      })
    })

    this.setState({ datasets: datasets });
  }

  componentDidMount() {
    const { stats, players } = this.props
    this.createLabels(stats);
    this.createDatasets(players, stats);
  }

  render() {
    const { labels, datasets } = this.state

    let data = {
      labels: labels.length > 10 ? labels.slice(-10) : labels,
      datasets: datasets
    }

    return (
      <div>
        <h2>Points Per Game - Last 10 Games</h2>
        <Line data={data} />
      </div>
    );
  }
};

export default Chart;

Chart.propTypes = {
  players: PropTypes.array.isRequired,
  stats: PropTypes.array.isRequired
}