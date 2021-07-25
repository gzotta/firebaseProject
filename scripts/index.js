const mentorList = document.querySelector(".mentors");

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
    <div class="collapsible-body white">${mentor.mobile_phone_number}</div>
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
