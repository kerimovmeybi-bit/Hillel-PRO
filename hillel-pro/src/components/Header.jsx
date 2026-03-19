import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="header">
      <nav>
        <Link to="/">Головна</Link>
        <Link to="/contacts">Контакти</Link>
        <Link to="/about">Про мене</Link>
      </nav>
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
    </header>
  );
};

export default Header;