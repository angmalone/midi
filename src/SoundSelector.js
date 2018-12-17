import React from "react";

class SoundSelector extends React.Component {
  render() {
    return (
      <div className="sound-selector">
        <h2>Choose Sounds</h2>

        <div className="first-808">
          <h3>First 808</h3>
          <label>
            <input
              type="radio"
              onChange={this.props.handleFirst808Change}
              defaultChecked
              value={this.props.sounds.sound1.audio}
              name="first-808"
              title="Lucid Dreams"
            />
            Lucid Dreams
          </label>
          <label>
            <input
              type="radio"
              onChange={this.props.handleFirst808Change}
              value={this.props.sounds.sound2.audio}
              name="first-808"
              title="No Heart"
            />
            No Heart
          </label>
        </div>

        <div className="second-808">
          <h3>Second 808</h3>
        </div>

        <div className="kick">
          <h3>Kick</h3>
        </div>

        <div className="snare">
          <h3>Snare</h3>
        </div>

        <div className="closed-hat">
          <h3>Closed Hat</h3>
        </div>

        <div className="open-hat">
          <h3>Open Hat</h3>
        </div>

        <div className="sub">
          <h3>Sub</h3>
        </div>

        <div className="clap">
          <h3>Clap</h3>
        </div>
      </div>
    );
  }
}

export default SoundSelector;