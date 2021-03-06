import React from "react";

class SoundSelector extends React.Component {
  render() {
    return (
      <div className="sound-selector">
        <h2>Select Sounds</h2>

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
          <br />
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
          <br />
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
          <br />
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
          <br />
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
          <br />
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
          <br />
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
          <br />
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
          <br />
          <label>
            <input
              type="radio"
              onChange={this.props.handleKickChange}
              value={this.props.sounds.sound12.audio}
              name="kick"
              title="Metro Boomin"
            />
            Metro Boomin
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={this.props.handleKickChange}
              value={this.props.sounds.sound13.audio}
              name="kick"
              title="Southside"
            />
            Southside
          </label>
        </div>

        <div className="snare">
          <h3>Snare</h3>
          <label>
            <input
              type="radio"
              onChange={this.props.handleSnareChange}
              defaultChecked
              value={this.props.sounds.sound3.audio}
              name="snare"
              title="Lex Luger"
            />
            Lex Luger
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={this.props.handleSnareChange}
              value={this.props.sounds.sound14.audio}
              name="snare"
              title="Purple Kups"
            />
            Purple Kups
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={this.props.handleSnareChange}
              value={this.props.sounds.sound15.audio}
              name="snare"
              title="Metro Boomin"
            />
            Metro Boomin
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={this.props.handleSnareChange}
              value={this.props.sounds.sound16.audio}
              name="snare"
              title="Big Head"
            />
            Big Head
          </label>
        </div>

        <div className="closed-hat">
          <h3>Closed Hat</h3>
          <label>
            <input
              type="radio"
              onChange={this.props.handleClosedHatChange}
              defaultChecked
              value={this.props.sounds.sound5.audio}
              name="closed-hat"
              title="Metro Boomin"
            />
            Metro Boomin
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={this.props.handleClosedHatChange}
              value={this.props.sounds.sound17.audio}
              name="closed-hat"
              title="Deso"
            />
            Deso
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={this.props.handleClosedHatChange}
              value={this.props.sounds.sound18.audio}
              name="closed-hat"
              title="Lofi"
            />
            Lofi
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={this.props.handleClosedHatChange}
              value={this.props.sounds.sound19.audio}
              name="closed-hat"
              title="Draco"
            />
            Draco
          </label>
        </div>

        <div className="open-hat">
          <h3>Open Hat</h3>
          <label>
            <input
              type="radio"
              onChange={this.props.handleOpenHatChange}
              defaultChecked
              value={this.props.sounds.sound6.audio}
              name="open-hat"
              title="My People"
            />
            My People
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={this.props.handleOpenHatChange}
              value={this.props.sounds.sound20.audio}
              name="open-hat"
              title="Dallas"
            />
            Dallas
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={this.props.handleOpenHatChange}
              value={this.props.sounds.sound21.audio}
              name="open-hat"
              title="Slat 🐍"
            />
            SLAT 🐍
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={this.props.handleOpenHatChange}
              value={this.props.sounds.sound22.audio}
              name="open-hat"
              title="Live"
            />
            Live
          </label>
        </div>

        <div className="sub">
          <h3>Sub</h3>
          <label>
            <input
              type="radio"
              onChange={this.props.handleSubChange}
              defaultChecked
              value={this.props.sounds.sound7.audio}
              name="sub"
              title="F"
            />
            F
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={this.props.handleSubChange}
              value={this.props.sounds.sound23.audio}
              name="sub"
              title="A#"
            />
            A#
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={this.props.handleSubChange}
              value={this.props.sounds.sound24.audio}
              name="sub"
              title="C"
            />
            C
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={this.props.handleSubChange}
              value={this.props.sounds.sound25.audio}
              name="sub"
              title="F#"
            />
            F#
          </label>
        </div>

        <div className="clap">
          <h3>Clap</h3>
          <label>
            <input
              type="radio"
              onChange={this.props.handleClapChange}
              defaultChecked
              value={this.props.sounds.sound8.audio}
              name="clap"
              title="UZ"
            />
            UZ
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={this.props.handleClapChange}
              value={this.props.sounds.sound26.audio}
              name="clap"
              title="Southside"
            />
            Southside
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={this.props.handleClapChange}
              value={this.props.sounds.sound27.audio}
              name="clap"
              title="Day"
            />
            Day
          </label>
          <br />
          <label>
            <input
              type="radio"
              onChange={this.props.handleClapChange}
              value={this.props.sounds.sound28.audio}
              name="clap"
              title="Deso"
            />
            Deso
          </label>
        </div>
      </div>
    );
  }
}

export default SoundSelector;
