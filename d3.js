document
  .getElementById("fetchUserDataBtn")
  .addEventListener("click", fetchUserData);

function fetchUserData() {
  fetch("./data.json")
    .then(response => response.json())
    .then(users => {
      console.log(users);
      let output = `<h5 class="heading5">कोरोना लाइव ट्रैकर By Pankaj Kumar Tiwari</h5>`
      output += '<div class="row">';
      users.forEach(function(user) {
        output += `
          <div class="col-sm-4">
                  <div class="card">
                  <div class="color-overlay">
                  <h1 class="heading">
                      ${user.displayName}
                  </h1>
                  <h1 class="heading">
                  ${user.id}
                  </h1>
                  <h2 class="f-18">सक्रिय केसेस (Total Effected): ${user.totalConfirmed}</h2>
                  <h2 class="f-18 text-primary">रिकवर हुए केसेस (Recover Case): ${user.totalRecovered}</h2>
                  <h2 class="f-18 text-danger">जानलेवा केसेस (Death cases): ${user.totalDeaths}</h2>
                  <p class="last-updte">${user.lastUpdated}</p>
                  </div>
                  </div>
                  </div>
                        `;
      });
      output += "</div>";
      document.getElementById("response").innerHTML = output;
    });
}
