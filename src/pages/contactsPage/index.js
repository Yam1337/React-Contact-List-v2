import { Header } from "../../components/header/index";
import { SearchBar } from "../../components/searchBar/index";
import { ContactList } from "../../components/contactList/index";
import { useState, useEffect } from "react";
import { fetchUsers } from "./utils/fetchUsers";
import { sortContactsByName } from "./utils/sortContactsByName";
import { isContactSearchMatch } from "./utils/isContactSearchMatch";

export const ContactsPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [activeContacts, setActiveContacts] = useState([]);
  const [contacts, setContacts] = useState(undefined);
  const [filteredContacts, setFilteredContacts] = useState(undefined);

  useEffect(() => {
    const getData = async () => {
      const users = await fetchUsers();
      const sortedUsers = sortContactsByName(users);
      setContacts(sortedUsers);
    };
    getData();
  }, []);

  useEffect(() => {
    if (contacts === undefined) {
      return;
    }

    setFilteredContacts(
      contacts.filter((item) => isContactSearchMatch(item, inputValue))
    );
  }, [contacts, inputValue]);
  return (
    <>
      <Header>
        Contacts
        <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
      </Header>
      <ContactList
        contacts={filteredContacts}
        inputValue={inputValue}
        setInputValue={setInputValue}
        activeContacts={activeContacts}
        setActiveContacts={setActiveContacts}
      />
    </>
  );
};
