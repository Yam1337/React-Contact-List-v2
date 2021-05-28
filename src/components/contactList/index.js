import { ContactListWrapper } from "./styles";
import { Contact } from "../contact/index";
import { useEffect, useState } from "react";
import { Loader } from "../loader";
import { sortContactsByName } from "./utils/sortContactsByName";
import { fetchUsers } from "./utils/fetchUsers";

export const ContactList = ({ inputValue, setInputValue }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const users = await fetchUsers();
      const sortedUsers = sortContactsByName(users);
      setContacts(sortedUsers);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <ContactListWrapper>
      {loading && <Loader />}
      {!loading &&
        contacts
          .filter((y) => {
            if (inputValue === "") {
              return y;
            } else {
              return (
                y.name.toLowerCase().includes(inputValue.toLowerCase()) ||
                y.phone.includes(inputValue)
              );
            }
          })
          .map((item) => (
            <Contact
              key={item.id}
              id={item.id}
              name={item.name}
              phone={item.phone}
            />
          ))}
    </ContactListWrapper>
  );
};
