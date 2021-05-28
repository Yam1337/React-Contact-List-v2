import { SearchInput } from "./styles";

export const SearchBar = ({ setInputValue }) => {
  return (
    <SearchInput
      placeholder="Search contacts..."
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
    ></SearchInput>
  );
};
