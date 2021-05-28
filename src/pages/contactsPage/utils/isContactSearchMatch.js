export const isContactSearchMatch = (contact, searchText) => {
  if (searchText === "") {
    return true;
  }

  return (
    contact.name.toLowerCase().includes(searchText.toLowerCase()) ||
    contact.phone.includes(searchText)
  );
};
