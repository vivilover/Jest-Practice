function capitalize(str) {
  // const capitalized = str.chatAt(0).toUpperCase() + str.slice(1);
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalized;
}

module.exports = capitalize;