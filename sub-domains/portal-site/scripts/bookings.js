// stateful navigation
let previousPage = window.location.href;
sessionStorage.setItem("Previous Page", previousPage);

// generic api request headers
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `JWT ${sessionStorage.getItem("Access")}`);

// event listeners for buttons
document.getElementById("add").addEventListener("click", (event) => {
  if (document.getElementById("grid").style.display != "none") {
    document.getElementById("grid").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("addBookingForm").style.display = "block";
  } else {
    document.getElementById("grid").style.display = "grid";
    document.getElementById("search").style.display = "block";
    document.getElementById("addBookingForm").style.display = "none";
  }
});

document.getElementById("search").addEventListener("keyup", (event) => { 
  searchBookings();
});

window.addEventListener("load", (event) => {
  document.getElementById('dateTime').value = new Date().toISOString().slice(0, 16);
  getBookings();
  getCustomers();
});

document.getElementById("home").addEventListener("click", (event) => {
  window.location.href = "/html/home.html";
});

document.getElementById("customers").addEventListener("click", (event) => {
  window.location.href = "/html/customers.html";
});

document.getElementById("submitButton").addEventListener("click", (event) => {
  addBooking();
});
// get all bookings and then send data for display function
function getBookings() {
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  fetch("https://web-production-abcdc.up.railway.app/54633/bookings/?ordering=-date", requestOptions)
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          displayBookings(data);
        });
      } else {
        sessionStorage.removeItem("Access");
      }
    })
    .catch((error) => console.log("error", error));
}
// display all bookings in a grid format
function displayBookings(data) {
  if (Object.keys(data).length == 0) {
    document.getElementById("errorDisplay").innerText = "No available bookings";
  } else {
    document.getElementById("errorDisplay").innerText = null;
    for (let i = 0; i < Object.keys(data).length; i++) {
      let grid = document.getElementById("grid");
      let gridItem = document.createElement("div");
      let container = document.createElement("div");
      let title = document.createElement("p");
      let date = document.createElement("p");
      let time = document.createElement("p");
      let price = document.createElement("p");
      let customer = document.createElement("p");
      let detail = document.createElement("p");
      gridItem.setAttribute("class", "servicesGridItem");
      container.setAttribute("class", "flexContainer");
      title.setAttribute("class", "subHeading");
      date.setAttribute("class", "sentence");
      time.setAttribute("class", "sentence");
      price.setAttribute("class", "sentence");
      customer.setAttribute("class", "sentence");
      detail.setAttribute("class", "sentence notes");
      title.innerText = data[i].title;
      let readableDate =
        data[i].date.slice(8, 10) +
        "-" +
        data[i].date.slice(5, 7) +
        "-" +
        data[i].date.slice(0, 4);
      date.innerHTML = "<b>Date</b><br>" + readableDate;
      time.innerHTML = "<b>Time</b><br>" + data[i].date.slice(11, 16);
      price.innerHTML = "<b>Price</b><br>£" + data[i].price;
      detail.innerHTML = "<b>Notes</b><br>" + data[i].detail;
      customer.innerHTML = '<b>Client</b><br>' + '<a href=/html/customer_detail.html>' + data[i].customer.full_name + '</a>';

      container.append(time, date, price, customer, detail);
      gridItem.append(title, container);
      grid.append(gridItem);
      gridItem.addEventListener("click", (event) => {
        sessionStorage.setItem("Customer ID", data[i].customer.id);
        sessionStorage.setItem("Booking ID", data[i].id);
        window.location.href = "/html/booking_detail.html";
      })
    }
  }
}
// add a booking to a specific customer
function addBooking() {
  let customerName = document.getElementById("customer").value;
  let firstName = customerName.split(" ")[0];
  let lastName = customerName.split(" ")[1];
  var customerID = "";
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };
  fetch(
    `https://web-production-abcdc.up.railway.app/54633/customers/?search=${firstName}+${lastName}`,
    requestOptions
  )
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          customerID = data[0].id;
          var raw = JSON.stringify({
            title: document.getElementById("title").value,
            detail: document.getElementById("notes").value,
            price: document.getElementById("price").value,
            date: document.getElementById("dateTime").value,
            customer_id: customerID,
          });
          var requestOptions2 = {
            method: "POST",
            headers: myHeaders,
            body: raw,
          };
          fetch(`https://web-production-abcdc.up.railway.app/54633/bookings/`, requestOptions2)
            .then((response) => {
              if (response.ok) {
                response.json().then((data) => {
                  document.getElementById("errorDisplay").innerText = null;
                  window.location.reload();
                  document.getElementById("grid").style.display = "grid";
                  document.getElementById("editCustomerForm").style.display =
                    "none";
                });
              } else {
                document.getElementById("errorDisplay").innerText =
                  "Invalid details supplied. Please try again!";
              }
            })
            .catch((error) => console.log("error", error));
        });
      }
    })
    .catch((error) => console.log("error", error));
}
// get all customers and display names in dropdown
function getCustomers() {
  let dropdownOptions = new Array();
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  fetch("https://web-production-abcdc.up.railway.app/54633/customers/?ordering=-id", requestOptions)
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          for (let i = 0; i < Object.keys(data).length; i++) {
            dropdownOptions[i] = data[i].full_name;
          }
          for (var i = 0; i < dropdownOptions.length; i++) {
            var option = dropdownOptions[i];
            var optionElement = document.createElement("option");
            optionElement.textContent = option;
            optionElement.value = option;
            document.getElementById("customer").appendChild(optionElement);
          }
        });
      } else {
        sessionStorage.removeItem("Access");
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
    let time = item[i].getElementsByTagName("p")[1];
    let date = item[i].getElementsByTagName("p")[2];
    let notes = item[i].getElementsByTagName("p")[3];
    let price = item[i].getElementsByTagName("p")[4];
    let customer = item[i].getElementsByTagName("p")[5];
    if (title.innerText.toLowerCase().indexOf(input) > -1 || time.innerText.toLowerCase().indexOf(input) > -1 || date.innerText.toLowerCase().indexOf(input) > -1 || notes.innerText.toLowerCase().indexOf(input) > -1 || price.innerText.toLowerCase().indexOf(input) > -1 || customer.innerText.toLowerCase().indexOf(input) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}