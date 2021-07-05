// import './App.css';
import React from 'react';
import TodoList from './components/TodoList';
import Timer from './components/Timer';

class App extends React.Component {
  render() {
    return (
      <>
        <TodoList />
        <Timer />
      </>
    );
  }

  componentDidCatch(err, info) {
    console.log(new Error(err, info));
  }
}

export default App;
