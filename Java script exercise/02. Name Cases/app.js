name = "Aizaz";

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(titleCase(name));

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
}
