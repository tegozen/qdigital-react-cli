import React from 'react';
import THREEAPP from './three';

//class ClassName extends React.Component необходимые для рендера html компоненты
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'default', // "default" as "button start" | "preload" | "canvas"
    }
    this.THREEAPP = new THREEAPP({
      some: 'example props'
    });
  }
  onStart = () => {
    this.setState({ mode: 'preload' }, newState => {
      this.THREEAPP.start(() => {
        this.setState({ mode: 'canvas' })
      });
    })
  }
  renderBlocker = () => {
    let child;
    switch (this.state.mode) {
      case 'default':
        child = <div onClick={this.onStart} className="button">Start</div>
        break;
      case 'preload':
        child = <div className="app__preload">Loading</div>
        break;
      default:
        return false
    }

    return (
      <div className="app__blocker">
        {child}
      </div>
    )
  }
  render() {
    return (
      <div className="app">
        <canvas className="app__canvas" id="canvas" />
        {this.renderBlocker()}
      </div>
    )
  }
}

export default App;
