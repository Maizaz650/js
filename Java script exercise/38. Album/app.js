function make_album(name, title) {
  return (myObj = {
    name: name,
    title: title,
  });
}

const album = make_album("all", "all or nothing");
console.log(album);
