// stateful navifation
let previousPage = window.location.href;
sessionStorage.setItem('Previous Page', previousPage);
// generic api request headers
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `JWT ${sessionStorage.getItem("Access")}`);
// event listeners for buttons
window.addEventListener("load", (event) => {
  getCustomers();
});

document.getElementById('home').addEventListener("click", (event) => {
  window.location.href = '/html/home.html';
});

document.getElementById('bookings').addEventListener("click", (event) => {
  window.location.href = '/html/bookings.html';
});

document.getElementById("add").addEventListener("click", (event) => {
  document.getElementById("errorDisplay").innerText = null;
  if (document.getElementById('grid').style.display != 'none') {
    document.getElementById("grid").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("editCustomerForm").style.display = "block";
  } else {
    document.getElementById("grid").style.display = "grid";
    document.getElementById("search").style.display = "block";
    document.getElementById("editCustomerForm").style.display = "none";
  }
});

document.getElementById('submitButton').addEventListener("click", (event) => {
  addCustomer();
});

document.getElementById("search").addEventListener("keyup", (event) => { 
  searchBookings();
});
// get all customers
function getCustomers() {
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  fetch("https://web-production-abcdc.up.railway.app/54633/customers/?ordering=-id", requestOptions)
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          if (Object.keys(data).length == 0) {
            document.getElementById('errorDisplay').innerText = 'No available customers';
          } else {
            document.getElementById('errorDisplay').innerText = null;
            for (let i = 0; i < Object.keys(data).length; i++) {
              let grid = document.getElementById('grid');
              let gridItem = document.createElement('div');
              let container = document.createElement('div');
              let name = document.createElement('p');
              let number = document.createElement('p');
              let email = document.createElement('p');
              gridItem.setAttribute('class', 'servicesGridItem');
              container.setAttribute('class', 'flexContainer');
              name.setAttribute('class', 'subHeading');
              number.setAttribute('class', 'sentence');
              email.setAttribute('class', 'sentence email');
              name.innerText = data[i].full_name;
              number.innerHTML = '<b>Phone</b><br>' + data[i].phone_number;
              email.innerHTML = '<b>Email</b><br>' +  data[i].email;
              container.append(number, email)
              gridItem.append(name, container);
              grid.append(gridItem);
        
              gridItem.addEventListener("click", (event) => {
                sessionStorage.setItem('Customer ID', data[i].id);
                window.location.href = '/html/customer_detail.html';
              });
            }
          }
        });
      } else {
        sessionStorage.removeItem('Access');
      }
    })
    .catch((error) => console.log("error", error));
}
// add a new customer
function addCustomer() {
  var raw = JSON.stringify({
    full_name: document.getElementById("name").value,
    phone_number: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    address: {
      address_line_1: document.getElementById("address1").value,
      address_line_2: document.getElementById("address2").value,
      postcode: document.getElementById("postcode").value,
      town: document.getElementById("town").value,
    }
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };
  fetch(`https://web-production-abcdc.up.railway.app/54633/customers/`, requestOptions)
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          document.getElementById("errorDisplay").innerText = null;
          window.location.reload();
          document.getElementById("grid").style.display = "grid";
          document.getElementById("editCustomerForm").style.display = "none";
        });
      } else {
        document.getElementById("errorDisplay").innerText =
          "Invalid details supplied. Please try again!";
      }
    })
    .catch((error) => console.log("error", error));
}
// search bar
function searchBookings() {
  let input = document.getElementById("search").value;
  input = input.toLowerCase();
  let item = document.getElementsByClassName("servicesGridItem");
  for (let i = 0; i < item.length; i++) {
    let title = item[i].getElementsByTagName("p")[0];
    let phone = item[i].getElementsByTagName("p")[1];
    let email = item[i].getElementsByTagName("p")[2];
    if (title.innerText.toLowerCase().indexOf(input) > -1 || phone.innerText.toLowerCase().indexOf(input) > -1 || email.innerText.toLowerCase().indexOf(input) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}