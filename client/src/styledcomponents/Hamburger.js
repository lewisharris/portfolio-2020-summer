import React from "react";
import HamburgerIcon from "./HamburgerIcon";
import Overlay from "./Overlay";
import HamburgerMenu from "./HamburgerMenu";

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  toggleMenu = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <div>
        <HamburgerIcon toggle={this.toggleMenu} />
        {this.state.visible === true ? (
          <>
            <Overlay onClick={() => this.toggleMenu()} />
            <HamburgerMenu toggle={this.toggleMenu} />
          </>
        ) : null}
      </div>
    );
  }
}

export default Hamburger;
