places = ["Demark", "Dubai", "New York", "Spain", "India"];
for (var i = 0; i < places.length; i++) {
  console.log(places[i]);
}

const arr1 = [...places].sort();
console.log(arr1);
console.log(places);
const arr2 = places.slice().reverse();
console.log(arr2);
console.log(places);
