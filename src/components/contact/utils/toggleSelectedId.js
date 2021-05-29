export const toggleSelectedId = (arr, id) => {
  const result = [...arr];
  if (result.includes(id)) {
    result.splice(result.indexOf(id), 1);
    return result;
  }
  result.push(id);
  return result;
};
