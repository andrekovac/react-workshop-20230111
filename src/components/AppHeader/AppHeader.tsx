interface AppHeaderProps {
  title: string;
}

export const AppHeader = ({ title }: AppHeaderProps) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export const myString = "Das ist mein String";
