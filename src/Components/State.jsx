import React from 'react'

// const State = () => {
    class  State extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  updateCount() {
    this.setState({ count: this.state.count + 1 });
  }
render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.updateCount()}>Increment</button>
      </div>
    );
  }
}

export default State
