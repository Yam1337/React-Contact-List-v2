export const toggleSelectedId = (arr, id) => {
  const result = [...arr];
  if (result.includes(id)) {
    result.splice(result.indexOf(id), 1);
    console.log(result);
    return result;
  }
  result.push(id);
  console.log(result);
  return result;
};
