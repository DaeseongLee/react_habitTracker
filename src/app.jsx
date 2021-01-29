import './app.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import Habits from './components/habits';

class App extends Component {
  state = {
    habits: [
      { id: 0, name: 'Reading', count: 0 },
      { id: 1, name: 'Running', count: 0 },
      { id: 2, name: 'Coding', count: 0 }
    ]
  }

  handleIncrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...item, count: item.count + 1 }
      } else {
        return item;
      }
    })
    this.setState({ habits });
  }

  handleDecrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = item.count - 1;
        return { ...item, count: count < 0 ? 0 : count }
      } else {
        return item;
      }
    })
    this.setState({ habits });
  }
  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  }
  handleReset = () => {
    const habits = this.state.habits.map(item => {
      if (item.count !== 0)
        return { ...item, count: 0 };
      else
        return item;
    });
    this.setState({ habits });
  }
  addHabit = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  }
  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(habit => habit.count > 0).length} />
        <Habits habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onAdd={this.addHabit} />
      </>
    );
  }
}

export default App;

