import { ContactListWrapper, LoaderWrapper } from "./styles";
import { Contact } from "../contact/index";
import { Loader } from "../loader";

export const ContactList = ({
  activeContacts,
  setActiveContacts,
  contacts,
}) => {
  const loading = contacts === undefined;

  return (
    <>
      {loading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {!loading && (
        <ContactListWrapper>
          {contacts.map((item) => (
            <Contact
              key={item.id}
              id={item.id}
              name={item.name}
              phone={item.phone}
              activeContacts={activeContacts}
              setActiveContacts={setActiveContacts}
            />
          ))}
        </ContactListWrapper>
      )}
    </>
  );
};
