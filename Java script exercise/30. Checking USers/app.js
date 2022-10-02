const current_users = ["aizaz", "jawad", "Hassan", "Shaber", "Saad"];
const new_users = ["sammad", "Zia", "Hassan", "Ahsan", "Ahmed"];

for (let i = 0; i < new_users.length; i++) {
  if (current_users[i] == new_users[i]) {
    console.log("Username taken");
  } else {
    console.log("Username not taken");
  }
}
