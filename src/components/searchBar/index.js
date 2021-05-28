import { SearchInput } from "./styles";

export const SearchBar = ({ setInputValue, inputValue }) => {
  return (
    <SearchInput
      placeholder="Search contacts..."
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
    ></SearchInput>
  );
};
