import React from "react";

class Pad extends React.Component {
  render() {
    return (
      <div className="midi-pad">
        <button onKeyDown={this.props.handleKeyDown}>
          <p>
            {this.props.text}: <br />
            {this.props.name}
          </p>
        </button>
      </div>
    );
  }
}

export default Pad;
