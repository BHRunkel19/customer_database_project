// console.log(customers.results[0].name.first);

// var section = document.querySelector('section');
// var div = document.createElement("div");
// div.setAttribute("id", "div");
// section.appendChild(div);
// var newdiv = document.getElementById("div").innerHTML="This is a div";
// console.log(newdiv);

let section = document.createElement('section');

for (let i = 0; i < customers.results.length; i++) {
  // console.log(customers.results[i]);
  // console.log(customers.results[i].picture);
  let mainPage = document.querySelector('body');
  let grid = document.createElement('div');
  let employeeDirectory =
    `<img src="${customers.results[i].picture.large}">
    <h3>${customers.results[i].name.first} ${customers.results[i].name.last}</h3>
  <ul>
    <li>${customers.results[i].email}</li>

    <li>${customers.results[i].location.street}</li>

    <li>${customers.results[i].location.city}, ${customers.results[i].location.state} ${customers.results[i].location.postcode}<li>
    <li>${customers.results[i].cell}</li>

    <li>${customers.results[i].id.value}</li>
  </ul>`;
  grid.innerHTML = employeeDirectory;
  section.appendChild(grid);
  mainPage.appendChild(section);
};
