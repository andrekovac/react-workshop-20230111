import { useContext } from "react";
import { ThemeContext } from "../../domain/theme";
import { NavLink } from "react-router-dom";
import "./AppHeader.css";

interface AppHeaderProps {
  title: string;
}

export const AppHeader = ({ title }: AppHeaderProps) => {
  const theme = useContext(ThemeContext);

  return (
    <header className="AppHeader">
      <h1 style={{ color: theme.primaryColor }}>{title}</h1>
      <nav>
        <NavLink to="">Books</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
};

export const myString = "Das ist mein String";
