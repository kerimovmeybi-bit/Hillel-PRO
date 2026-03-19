import React from "react";

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Темна тема" : "Світла тема"}
    </button>
  );
};

export default ThemeToggle;