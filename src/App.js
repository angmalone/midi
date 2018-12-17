import React, { Component } from "react";
import "./App.css";
import Pad from "./Pad";
import SoundSelector from "./SoundSelector";
import sounds from "./sounds";

class App extends Component {
  state = {
    sounds: sounds,
    first808: sounds.sound1,
    second808: sounds.sound2,
    kick: sounds.sound3,
    snare: sounds.sound4,
    closedHat: sounds.sound5,
    openHat: sounds.sound6,
    sub: sounds.sound7,
    clap: sounds.sound8
  };

  handleFirst808Change = e => {
    e.preventDefault();
    //1. copy current state
    console.log("changed");
    console.log(this.state.first808);
    //2. change the sound
    this.setState({ first808: e.target.value });
  };

  handleKeyDown = e => {
    if (e.key === "a") {
      console.log("a has been pressed");
      console.log(this.state.first808);
      const audio = new Audio(`${this.state.first808.audio}`);
      audio.loop = false;
      audio.play();
    }
    if (e.key === "s") {
      console.log("s has been pressed");
      const audio = new Audio(`${this.state.second808.audio}`);
      audio.loop = false;
      audio.play();
    }
    if (e.key === "d") {
      console.log("d has been pressed");
      const audio = new Audio(`${this.state.kick.audio}`);
      audio.loop = false;
      audio.play();
    }
    if (e.key === "f") {
      console.log("f has been pressed");
      const audio = new Audio(`${this.state.snare.audio}`);
      audio.loop = false;
      audio.play();
    }
    if (e.key === "j") {
      console.log("j has been pressed");
      const audio = new Audio(`${this.state.closedHat.audio}`);
      audio.loop = false;
      audio.play();
    }
    if (e.key === "k") {
      console.log("k has been pressed");
      const audio = new Audio(`${this.state.openHat.audio}`);
      audio.loop = false;
      audio.play();
    }
    if (e.key === "l") {
      console.log("k has been pressed");
      const audio = new Audio(`${this.state.sub.audio}`);
      audio.loop = false;
      audio.play();
    }
    if (e.key === ";") {
      console.log("; has been pressed");
      const audio = new Audio(`${this.state.clap.audio}`);
      audio.loop = false;
      audio.play();
    }
  };

  render() {
    return (
      <div className="controller">
        <Pad handleKeyDown={this.handleKeyDown} />
        <Pad handleKeyDown={this.handleKeyDown} />
        <Pad handleKeyDown={this.handleKeyDown} />
        <Pad handleKeyDown={this.handleKeyDown} />
        <Pad handleKeyDown={this.handleKeyDown} />
        <Pad handleKeyDown={this.handleKeyDown} />
        <Pad handleKeyDown={this.handleKeyDown} />
        <Pad handleKeyDown={this.handleKeyDown} />
        <SoundSelector
          sounds={this.state.sounds}
          handleFirst808Change={this.handleFirst808Change}
        />
      </div>
    );
  }
}

export default App;
