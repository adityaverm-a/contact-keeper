import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => this.setState({
        title: data.title,
        body: data.body
      })
      );
  }

  // UNSAFE_componentWillMount() {
  //   console.log("componentWillMount...");
  // }
  //
  // componentDidUpdate() {
  //   console.log("componentDidUpdate...");
  // }
  //
  // UNSAFE_componentWillUpdate() {
  //   console.log("componentWillUpdate...");
  // }
  //
  // UNSAFE_componentWillReceiveProps() {
  //   console.log("componentWillReceiveProps...");
  // }
  //
  // static getDerivedStateFromProps(nextProps, nextState) {
  //   return {
  //     test: "something else"
  //   };
  // }
  //
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate");
  // }

  render() {
    const { title, body } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  };
}

export default Test;