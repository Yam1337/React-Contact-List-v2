import { SearchInput } from "./styles";

export const SearchBar = () => {
  return (
    <SearchInput
      placeholder="Search contacts..."
      onChange={(e) => {
        console.log(e.target.value);
      }}
    ></SearchInput>
  );
};
