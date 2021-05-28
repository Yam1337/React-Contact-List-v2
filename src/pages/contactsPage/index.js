import { Header } from "../../components/header/index";
import { SearchBar } from "../../components/searchBar/index";
import { ContactList } from "../../components/contactList/index";
import { useState } from "react";

export const ContactsPage = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <Header>
        Contacts
        <SearchBar setInputValue={setInputValue} />
      </Header>
      <ContactList
        contacts={[]}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </>
  );
};
