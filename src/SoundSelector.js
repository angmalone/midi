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
          <label>
            <input
              type="radio"
              onChange={this.props.handleFirst808Change}
              value={this.props.sounds.sound9.audio}
              name="first-808"
              title="Sonny"
            />
            Sonny
          </label>
          <label>
            <input
              type="radio"
              onChange={this.props.handleFirst808Change}
              value={this.props.sounds.sound10.audio}
              name="first-808"
              title="Sumo"
            />
            Sumo
          </label>
        </div>

        <div className="second-808">
          <h3>Second 808</h3>
          <label>
            <input
              type="radio"
              onChange={this.props.handleSecond808Change}
              value={this.props.sounds.sound1.audio}
              name="second-808"
              title="Lucid Dreams"
            />
            Lucid Dreams
          </label>
          <label>
            <input
              type="radio"
              onChange={this.props.handleSecond808Change}
              defaultChecked
              value={this.props.sounds.sound2.audio}
              name="second-808"
              title="No Heart"
            />
            No Heart
          </label>
          <label>
            <input
              type="radio"
              onChange={this.props.handleSecond808Change}
              value={this.props.sounds.sound9.audio}
              name="second-808"
              title="Sonny"
            />
            Sonny
          </label>
          <label>
            <input
              type="radio"
              onChange={this.props.handleSecond808Change}
              value={this.props.sounds.sound10.audio}
              name="second-808"
              title="Sumo"
            />
            Sumo
          </label>
        </div>

        <div className="kick">
          <h3>Kick</h3>
          <label>
            <input
              type="radio"
              onChange={this.props.handleKickChange}
              defaultChecked
              value={this.props.sounds.sound3.audio}
              name="kick"
              title="Big Kick"
            />
            Big Kick
          </label>
          <label>
            <input
              type="radio"
              onChange={this.props.handleKickChange}
              value={this.props.sounds.sound11.audio}
              name="kick"
              title="Desiigner"
            />
            Desiigner
          </label>
          <label>
            <input
              type="radio"
              onChange={this.props.handleKickChange}
              value={this.props.sounds.sound12.audio}
              name="kick"
              title="Metro Kick"
            />
            Metro Boomin
          </label>
          <label>
            <input
              type="radio"
              onChange={this.props.handleKickChange}
              value={this.props.sounds.sound13.audio}
              name="kick"
              title="Southside Kick"
            />
            Southside
          </label>
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
