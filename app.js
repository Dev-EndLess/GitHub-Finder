import Github from "./Github.js"
import UI from "./ui.js"

const github = new Github()
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // console.log(userText)
    // Make http call
    github.getUser(userText)
    .then(data => {
      if (data.profile.message === "Not Found") {
        // Show Alert
        ui.showAlert('User not Found', 'alert alert-danger');
      } else {
        // Show Profile
        ui.showProfile(data.profile)
        ui.showRepos(data.repos)
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
