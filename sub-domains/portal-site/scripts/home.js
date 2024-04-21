import { createInsight } from "./core.js";
// stateful navigation
let previousPage = window.location.href;
sessionStorage.setItem('Previous Page', previousPage);
// generic api request headers and options
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `JWT ${sessionStorage.getItem("Access")}`);
// generic api request options
var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};
// event listeners for buttons
document.getElementById("add").addEventListener("click", (event) => {
  if (document.getElementById('grid').style.display != 'none') {
    document.getElementById("grid").style.display = "none";
    document.getElementById("insightGrid").style.display = "none";
    document.getElementById("today").style.display = "none";
    document.getElementById("insightSubHeading").style.display = "none";
    document.getElementById("addBookingForm").style.display = "block";
  } else {
    document.getElementById("grid").style.display = "grid";
    document.getElementById("insightGrid").style.display = "grid";
    document.getElementById("today").style.display = "block";
    document.getElementById("insightSubHeading").style.display = "block";
    document.getElementById("addBookingForm").style.display = "none";
  }
});

document.getElementById("submitButton").addEventListener("click", (event) => {
  addBooking();
});

document.getElementById('bookings').addEventListener("click", (event) => {
  window.location.href = '/html/bookings.html';
});

document.getElementById('customers').addEventListener("click", (event) => {
  window.location.href = '/html/customers.html';
});

window.addEventListener("load", (event) => {
  document.getElementById('dateTime').value = new Date().toISOString().slice(0, 16);
  todaysBookings();
});
// get bookings for the current day and return in a grid format
function todaysBookings() {
  let todays_date = new Date().toISOString().slice(0, 10);
  fetch(
    `https://web-production-abcdc.up.railway.app/54633/bookings/?ordering=date&search=${todays_date}`,
    requestOptions
  )
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          getTotalBookings();
          getCustomers();
          displayBookings(data);
        });
      } else {
        sessionStorage.removeItem("Access");
      }
    })
    .catch((error) => console.log("error", error));
}
// display today's bookings with the name of the customer associated to them
function displayBookings(data) {
  let revenueCount = 0;
    document.getElementById('errorDisplay').innerText = null;
    createInsight(Object.keys(data).length, 'Bookings(s) Today');
    for (let i = 0; i < Object.keys(data).length; i++) {
      let grid = document.getElementById('grid');
      let gridItem = document.createElement('div');
      let container = document.createElement('div');
      let titleContainer = document.createElement('div');
      let title = document.createElement('p');
      let buttonElement = document.createElement('button');
      let time = document.createElement("p");
      let date = document.createElement("p");
      let detail = document.createElement('p');
      let price = document.createElement('p');
      let customer = document.createElement('p');
      gridItem.setAttribute('class', 'servicesGridItem');
      container.setAttribute('class', 'flexContainer');
      titleContainer.setAttribute('class', 'flexContainer titleContainer');
      title.setAttribute('class', 'subHeading');
      time.setAttribute('class', 'sentence');
      date.setAttribute('class', 'sentence');
      detail.setAttribute('class', 'sentence notes');
      price.setAttribute('class', 'sentence');
      customer.setAttribute('class', 'sentence');
      buttonElement.setAttribute('class', 'calendarButton');
      let readableDate =
        data[i].date.slice(8, 10) + "-" + data[i].date.slice(5, 7) + "-" + data[i].date.slice(0, 4);
      let calendarDate = data[i].date.slice(0, 4) + "-" + data[i].date.slice(5, 7) + "-" + data[i].date.slice(8, 10);
      title.innerHTML = data[i].title;
      buttonElement.innerHTML = `<img src='/images/addToCalendar.svg' />`;
      time.innerHTML = "<b>Time</b><br>" + data[i].date.slice(11, 16);
      date.innerHTML = "<b>Date</b><br>" + readableDate;
      price.innerHTML = '<b>Price</b><br>£' + data[i].price;
      detail.innerHTML = '<b>Notes</b><br>' +  data[i].detail;
      customer.innerHTML = '<b>Client</b><br>' + '<a href=/html/customer_detail.html>' + data[i].customer.full_name + '</a>';
      container.append(time, date, price, customer, detail);
      const config = {
        name: data[i].title,
        description:  data[i].detail,
        startDate: calendarDate,
        startTime: data[i].date.slice(11, 16),
        endTime: data[i].date.slice(11, 16),
        options: ["Apple", "Google"],
        timeZone: "Europe/London"
      };
      Object.assign(config, {location: `${data[i].customer.address.address_line_1}, ${data[i].customer.address.postcode}, ${data[i].customer.address.town}`})
      buttonElement.addEventListener("click", (event) => {
        atcb_action(config, buttonElement);
        event.stopImmediatePropagation();
      });
      
      titleContainer.append(title, buttonElement);
      gridItem.append(titleContainer, container);
      grid.append(gridItem);

      gridItem.addEventListener("click", (event) => {
        sessionStorage.setItem('Customer ID', data[i].customer.id);
        sessionStorage.setItem('Booking ID', data[i].id);
        window.location.href = '/html/booking_detail.html';
      });
      revenueCount += data[i].price;
    }
    revenueCount = '£' + revenueCount
    createInsight(revenueCount, `Today's Revenue`);
}
// add a new booking to a customer
function addBooking() {
  let customerName = document.getElementById("customer").value;
  let firstName = customerName.split(" ")[0];
  let lastName = customerName.split(" ")[1];
  var customerID = "";
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };
  fetch(`https://web-production-abcdc.up.railway.app/54633/customers/?search=${firstName}+${lastName}`, requestOptions)
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          customerID = data[0].id;
          var raw = JSON.stringify({
            title: document.getElementById("title").value,
            detail: document.getElementById("notes").value,
            price: document.getElementById("price").value,
            date: document.getElementById("dateTime").value,
            customer_id: customerID
          });
          var postRequestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw
          };
          fetch(`https://web-production-abcdc.up.railway.app/54633/bookings/`, postRequestOptions)
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
        });
      } 
    })
    .catch((error) => console.log("error", error)); 
}
// get a list of all bookings for a total bookings and overall revenue insight
function getTotalBookings() {
  fetch("https://web-production-abcdc.up.railway.app/54633/bookings/?ordering=-date", requestOptions)
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          let overallRevenue = 0
          createInsight(Object.keys(data).length, 'Total Bookings');
          for (let i =0; i < Object.keys(data).length; i++) {
            overallRevenue += data[i].price;
          }
          overallRevenue = '£' + overallRevenue;
          createInsight(overallRevenue, 'Total Revenue');
        });
      } else {
        sessionStorage.removeItem("Access");
      }
    })
    .catch((error) => console.log("error", error));
}
// get all customers and display names in dropdown
function getCustomers() {
  let dropdownOptions = new Array();
  fetch("https://web-production-abcdc.up.railway.app/54633/customers/?ordering=-id", requestOptions)
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          createInsight(Object.keys(data).length, "Total Customers");
          for (let i = 0; i < Object.keys(data).length; i++) {
            dropdownOptions[i] = data[i].full_name;
            let optionElement = document.createElement("option");
            optionElement.textContent = dropdownOptions[i];
            optionElement.value = dropdownOptions[i];
            document.getElementById("customer").appendChild(optionElement);
          }
        });
      } else {
        sessionStorage.removeItem("Access");
      }
    })
    .catch((error) => console.log("error", error));
}