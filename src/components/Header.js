import React, { useState } from "react";
import App from "./App";

function Header({isDarkMode, onDarkModeClick}) {
    return (
        <>
        <Header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
        </Header>
        </>
    );
    }
  
  export default Header;