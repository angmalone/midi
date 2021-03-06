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
    //1. copy current state
    const first808 = { ...this.state.first808 };
    //2. change the sound
    first808.name = e.target.title;
    first808.audio = e.target.value;
    //3. set state
    this.setState({ first808: first808 });
  };

  handleSecond808Change = e => {
    const second808 = { ...this.state.second808 };
    second808.name = e.target.title;
    second808.audio = e.target.value;
    this.setState({ second808: second808 });
  };

  handleKickChange = e => {
    const kick = { ...this.state.kick };
    kick.name = e.target.title;
    kick.audio = e.target.value;
    this.setState({ kick: kick });
  };

  handleSnareChange = e => {
    const snare = { ...this.state.snare };
    snare.name = e.target.title;
    snare.audio = e.target.value;
    this.setState({ snare: snare });
  };

  handleClosedHatChange = e => {
    const closedHat = { ...this.state.closedHat };
    closedHat.name = e.target.title;
    closedHat.audio = e.target.value;
    this.setState({ closedHat: closedHat });
  };

  handleOpenHatChange = e => {
    const openHat = { ...this.state.openHat };
    openHat.name = e.target.title;
    openHat.audio = e.target.value;
    this.setState({ openHat: openHat });
  };

  handleSubChange = e => {
    const sub = { ...this.state.sub };
    sub.name = e.target.title;
    sub.audio = e.target.value;
    this.setState({ sub: sub });
  };

  handleClapChange = e => {
    const clap = { ...this.state.clap };
    clap.name = e.target.title;
    clap.audio = e.target.value;
    this.setState({ clap: clap });
  };

  handleKeyDown = e => {
    if (e.key === "a") {
      console.log("a has been pressed");
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
      console.log("l has been pressed");
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
      <div className="full">
        <div className="controller">
          <div className="first-row">
            <Pad
              text="first 808"
              name={this.state.first808.name}
              handleKeyDown={this.handleKeyDown}
            />
            <Pad
              text="second 808"
              name={this.state.second808.name}
              handleKeyDown={this.handleKeyDown}
            />
            <Pad
              text="kick"
              name={this.state.kick.name}
              handleKeyDown={this.handleKeyDown}
            />
            <Pad
              text="snare"
              name={this.state.snare.name}
              handleKeyDown={this.handleKeyDown}
            />
          </div>
          <div className="second-row">
            <Pad
              text="closed hat"
              name={this.state.closedHat.name}
              handleKeyDown={this.handleKeyDown}
            />
            <Pad
              text="open hat"
              name={this.state.openHat.name}
              handleKeyDown={this.handleKeyDown}
            />
            <Pad
              text="sub"
              name={this.state.sub.name}
              handleKeyDown={this.handleKeyDown}
            />
            <Pad
              text="clap"
              name={this.state.clap.name}
              handleKeyDown={this.handleKeyDown}
            />
          </div>
        </div>
        <SoundSelector
          sounds={this.state.sounds}
          handleFirst808Change={this.handleFirst808Change}
          handleSecond808Change={this.handleSecond808Change}
          handleKickChange={this.handleKickChange}
          handleSnareChange={this.handleSnareChange}
          handleClosedHatChange={this.handleClosedHatChange}
          handleOpenHatChange={this.handleOpenHatChange}
          handleSubChange={this.handleSubChange}
          handleClapChange={this.handleClapChange}
        />
      </div>
    );
  }
}

export default App;
