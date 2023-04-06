import { Container } from "./styles";

type HeaderProps = {
  search: string;
  setSearch: (value: string) => void;
};

export const Header = ({ search, setSearch }: HeaderProps) => {
  return (
    <Container className="container">
      <h1>QuizK</h1>
      <input
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        placeholder="Busque sua preferência"
      />
    </Container>
  );
};
