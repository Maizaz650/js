magicians = ["mag1", "mag2", "mag3"];

function show_magicians(mag) {
  for (let i = 0; i < mag.length; i++) {
    console.log(mag[i]);
  }
}
show_magicians(magicians);

function make_great(mag) {
  for (let i = 0; i < mag.length; i++) {
    console.log(`Great ${mag[i]}`);
  }
}

make_great(magicians);
