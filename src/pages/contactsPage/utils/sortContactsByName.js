export const sortContactsByName = (arr) => {
  const result = [...arr];
  result.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
  return result;
};
