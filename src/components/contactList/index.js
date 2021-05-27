import { ContactListWrapper } from "./styles";
import { Contact } from "../contact/index";
import { useEffect, useState } from "react";

export const ContactList = () => {
  const [Contacts, setContacts] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();
      setContacts(json);
      setLoading(false);
    };
    getData();
  }, []);
  console.log(Contacts);

  if (Loading) {
    return (
      <ContactListWrapper>
        <div>Loading...</div>
      </ContactListWrapper>
    );
  }
  return (
    <ContactListWrapper>
      {Contacts.map((item) => (
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
