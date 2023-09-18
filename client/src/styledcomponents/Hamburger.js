import React, { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import Overlay from "./Overlay";
import HamburgerMenu from "./HamburgerMenu";

export default function Hamburger() {
  const [visible, setVisible] = useState(false);
  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <HamburgerIcon toggle={toggleMenu} />
      {visible === true ? (
        <>
          <Overlay onClick={() => toggleMenu()} />
          <HamburgerMenu toggle={toggleMenu} />
        </>
      ) : null}
    </div>
  );
}
