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

list.push("Abdullah");
list = [...list, "Jawad"];

for (var i = 0; i < list.length; i++) {
  console.log(`I would like to invite you to ${list[i]}`);
}

console.log("I can invite only two people");

while (list.length > 2) {
  name = list.pop();
  console.log(`I am sorry you can't make it ${name}`);
}

for (var i = 0; i < list.length; i++) {
  console.log(`You ${list[i]} are still invited`);
}

list.pop();
list.pop();

console.log(list);
