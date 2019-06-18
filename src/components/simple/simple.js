import React from 'react';

// Vinicio - having an export here makes it "easier" to read
export default class Simple extends React.Component {

  constructor(props) {
    super(props);
    this.state = { };

    this.state.value = false;
  }

  handleClick = event => {
    event.preventDefault();
    // Vinicio - we call this syntactic sugar
    this.setState(oldState => ({
        value: !oldState.value,
    }));
    // this.setState(oldState => {
    //   return {
    //     value: !oldState.value,
    //   };
    // });
  };

  // Vinicio - this is a method
  render(){
    return (
      <section className="Simple">
        <span>Value: {this.state.value.toString()}</span>
        <button onClick={this.handleClick}>Change Value</button>
      </section>
    );
  }
};

// Vinicio - In some cases you may want to move your exports here
// Especially if you have a lot of exports
