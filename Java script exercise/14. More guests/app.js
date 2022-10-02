list = ["Ali", "Ahmed", "Hassan"];

for (var i = 0; i < list.length; i++) {
  console.log(`I would like to invite you to dinner ${list[i]}`);
}

console.log(`${list[2]} can't make it`);

list[2] = "Ahmer";

for (var i = 0; i < list.length; i++) {
  console.log(`I would like to invite you to dinner ${list[i]}`);
}

console.log("I have got a bigger table");

list.push("Khan");
list = [...list, "syed"];

for (var i = 0; i < list.length; i++) {
  console.log(`I would like to invite you to ${list[i]}`);
}
