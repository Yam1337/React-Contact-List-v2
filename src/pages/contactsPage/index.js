import { Header } from "../../components/header/index";
import { SearchBar } from "../../components/searchBar/index";
import { ContactList } from "../../components/contactList/index";

export const ContactsPage = () => {
  return (
    <>
      <Header>
        Contacts
        <SearchBar />
      </Header>
      <ContactList />
    </>
  );
};
