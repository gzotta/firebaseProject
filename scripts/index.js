const mentorList = document.querySelector(".mentors");
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
const accountDetails = document.querySelector(".account-details");

const setupUI = (user) => {
  if (user) {
    // account info
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        const html = `
      <div>Logged in as ${user.email}</div>
      <div>${doc.data().bio}</div>
      `;
        accountDetails.innerHTML = html;
      });

    //toggle UI elements
    loggedInLinks.forEach((item) => (item.style.display = "block"));
    loggedOutLinks.forEach((item) => (item.style.display = "none"));
  } else {
    // hide account info
    accountDetails.innerHTML = "";
    //toggle UI elements
    loggedInLinks.forEach((item) => (item.style.display = "none"));
    loggedOutLinks.forEach((item) => (item.style.display = "block"));
  }
};

// setup Mentors
const setupMentors = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const mentor = doc.data();
      const li = `
    <li>
    <div class="collapsible-header grey lighten-4">${mentor.first_name}</div>
    <div class="collapsible-body white">${mentor.ethnicity}</div>
    <div class="collapsible-body white">${mentor.email}</div>
    <div class="collapsible-body white">${mentor.phone}</div>
    </li>
    `;
      html += li;
    });
    mentorList.innerHTML = html;
  } else {
    mentorList.innerHTML =
      '<h5 class="center-align">Login to view mentors</h5>';
  }
};

// setup materialize components
document.addEventListener("DOMContentLoaded", function () {
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  var items = document.querySelectorAll(".collapsible");
  M.Collapsible.init(items);
});
