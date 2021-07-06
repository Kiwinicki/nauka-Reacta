import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);

	let totalTime = JSON.parse(localStorage.getItem('totalTime')) || 0;
    let timeString = convertSec(totalTime) || '0:00';

    this.state = {
      timerIsRunning: false,
      totalTime: totalTime,
      timeString: timeString,
    };
  }

  render() {
    return (
      <div>
        <h2>Ile czasu spędziłem na naukę Reacta</h2>
        <button onClick={this.startTimer}>start</button>
        <button onClick={this.stopTimer}>stop</button>
        <p>{this.state.timeString}</p>
      </div>
    );
  }

  startTimer = () => {
    if (this.state.timerIsRunning === false) {
      this.setState({ timerIsRunning: true });
      this.interval = setInterval(() => this.tick(), 1000);
    }
  };

  stopTimer = () => {
    if (this.state.timerIsRunning === true) {
      this.setState({ timerIsRunning: false });
      clearInterval(this.interval);
    }
  };

  tick = () => {
    this.setState((pervState) => {
      const actualTotalTime = parseInt(pervState.totalTime) + 1;
      localStorage.setItem('totalTime', actualTotalTime);

      return {
        totalTime: actualTotalTime,
        timeString: convertSec(actualTotalTime),
      };
    });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default Timer;

function convertSec(time) {
  let sec = time;
  if (sec === 0) {
    return '0:00';
  }

  let hrs = Math.floor(sec / 3600);
  sec -= hrs * 3600;
  let min = Math.floor(sec / 60);
  sec -= min * 60;

  sec = '' + sec;
  sec = ('00' + sec).substring(sec.length);

  if (hrs > 0) {
    min = '' + min;
    min = ('00' + min).substring(min.length);
    return hrs + ':' + min + ':' + sec;
  } else {
    return min + ':' + sec;
  }
}
