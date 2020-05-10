import React, { useState } from "react";

import MainMenu from "./MainMenu";
import Logo from "./Logo";

const Header = () => {
  return (
    <div>
      <Logo />
      <MainMenu />
    </div>
  );
};

export default Header;
