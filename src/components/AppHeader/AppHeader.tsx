import { useContext } from "react";
import { ThemeContext } from "../../domain/theme";

interface AppHeaderProps {
  title: string;
}

export const AppHeader = ({ title }: AppHeaderProps) => {
  const theme = useContext(ThemeContext);

  return (
    <header>
      <h1 style={{ color: theme.primaryColor }}>{title}</h1>
    </header>
  );
};

export const myString = "Das ist mein String";
