import React from "react";
import Sound from "react-sound";

class Pad extends React.Component {
  render() {
    return (
      <div className="midi-pad">
        <button onKeyDown={this.props.handleKeyDown}>testing</button>
      </div>
    );
  }
}

export default Pad;
