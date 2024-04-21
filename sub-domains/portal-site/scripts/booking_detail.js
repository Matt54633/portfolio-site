// stateful navigation
function findPreviousPage() {
  let previousPage = document.referrer;
  sessionStorage.setItem("Previous Page", previousPage);
}
document.getElementById('back').href = sessionStorage.getItem('Previous Page');

// retrieve customer and booking ID
const customer_id = sessionStorage.getItem("Customer ID");
const booking_id = sessionStorage.getItem("Booking ID");
// generic api request headers
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `JWT ${sessionStorage.getItem("Access")}`);
// event listeners for buttons
window.addEventListener("load", (event) => {
  bookingDetail();
});

document.getElementById("edit").addEventListener("click", (event) => {
  document.getElementById("errorDisplay").innerText = null;
  if (document.getElementById("grid").style.display != "none") {
    document.getElementById("grid").style.display = "none";
    document.getElementById("editCustomerForm").style.display = "block";
  } else {
    document.getElementById("grid").style.display = "grid";
    document.getElementById("editCustomerForm").style.display = "none";
  }
});

document.getElementById("delete").addEventListener("click", (event) => {
  if (confirm("Are you sure you wish to delete this booking?") == true) {
    deleteBooking();
  }
});

document.getElementById("submitButton").addEventListener("click", (event) => {
  updateBooking();
});

// retrieve data about specific booking
function bookingDetail() {
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    `https://web-production-abcdc.up.railway.app/54633/customers/${customer_id}/bookings/${booking_id}/`,
    requestOptions
  ).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        document.getElementById("heroHeading").innerText = data.title;
        let grid = document.getElementById("grid");
        let gridItem = document.createElement("div");
        let container = document.createElement("div");
        let titleContainer = document.createElement("div");
        let buttonElement = document.createElement("button");
        let bookingTitle = document.createElement("p");
        let detail = document.createElement("p");
        let date = document.createElement("p");
        let time = document.createElement("p");
        let price = document.createElement("p");
        let customer = document.createElement("p");
        bookingTitle.setAttribute("class", "subHeading");
        gridItem.setAttribute("class", "servicesGridItem");
        container.setAttribute("class", "flexContainer");
        titleContainer.setAttribute("class", "flexContainer titleContainer");
        detail.setAttribute("class", "sentence notes");
        price.setAttribute("class", "sentence");
        time.setAttribute("class", "sentence");
        date.setAttribute("class", "sentence");
        customer.setAttribute("class", "sentence");
        customer.setAttribute("id", "customer");
        buttonElement.setAttribute("class", "calendarButton");
        buttonElement.setAttribute("id", "calendarButton");
        let readableDate =
          data.date.slice(8, 10) +
          "-" +
          data.date.slice(5, 7) +
          "-" +
          data.date.slice(0, 4);
        let calendarDate =
          data.date.slice(0, 4) +
          "-" +
          data.date.slice(5, 7) +
          "-" +
          data.date.slice(8, 10);
        var config = {
          name: data.title,
          description: data.detail,
          startDate: calendarDate,
          startTime: data.date.slice(11, 16),
          endTime: data.date.slice(11, 16),
          options: ["Apple", "Google"],
          timeZone: "Europe/London",
        };

        bookingTitle.innerText = "Details";
        time.innerHTML = "<b>Time</b><br>" + data.date.slice(11, 16);
        date.innerHTML = "<b>Date</b><br>" + readableDate;
      customer.innerHTML = '<b>Client</b><br>' + '<a href=/html/customer_detail.html>' + data.customer + '</a>';
        price.innerHTML = "<b>Price</b><br>£" + data.price;
        detail.innerHTML = "<b>Notes</b><br>" + data.detail;
        buttonElement.innerHTML = `<img src='/images/addToCalendar.svg' />`;

        titleContainer.append(bookingTitle, buttonElement);
        container.append(time, date, price, customer, detail);
        gridItem.append(titleContainer, container);
        grid.append(gridItem);

        document.getElementById("title").value = data.title;
        document.getElementById("notes").value = data.detail;
        document.getElementById("price").value = data.price;
        document.getElementById("dateTime").value = data.date.split("Z")[0];
        getAddress(customer_id, config);
      });
    } else {
      sessionStorage.removeItem("Access");
    }
  });
}
// update a specific booking
function updateBooking() {
  var raw = JSON.stringify({
    title: document.getElementById("title").value,
    detail: document.getElementById("notes").value,
    price: document.getElementById("price").value,
    date: document.getElementById("dateTime").value,
  });

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
  };

  fetch(
    `https://web-production-abcdc.up.railway.app/54633/customers/${customer_id}/bookings/${booking_id}/`,
    requestOptions
  )
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
// delete a specific booking
function deleteBooking() {
  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
  };
  fetch(
    `https://web-production-abcdc.up.railway.app/54633/customers/${customer_id}/bookings/${booking_id}/`,
    requestOptions
  )
    .then((response) => {
      if (response.ok) {
        document.getElementById("errorDisplay").innerText = null;
        window.location.href = sessionStorage.getItem("Previous Page");
      } else {
        document.getElementById("errorDisplay").innerText ="Unable to delete booking!";
      }
    })
    .catch((error) => console.log("error", error));
}
// get address linked to booking
function getAddress(customer_id, config) {
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  fetch(
    `https://web-production-abcdc.up.railway.app/54633/customers/${customer_id}/addresses/`,
    requestOptions
  )
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          let grid = document.getElementById("grid");
          let gridItem = document.createElement("div");
          let addressTitle = document.createElement("p");
          let addressString = document.createElement("p");
          addressTitle.setAttribute("class", "subHeading");
          gridItem.setAttribute("class", "servicesGridItem");
          addressString.setAttribute("class", "sentence");
          addressTitle.innerText = "Address";
          let linkText = `${data[0].address_line_1},+${data[0].postcode},+${data[0].town}`;
          linkText = linkText.replace(/\s/g, "");
          let baseURL = "https://maps.google.com/maps?q=" + linkText;
          addressString.innerHTML =
            `<a target='blank' href=${baseURL}>` +
            data[0].address_line_1 +
            ", " +
            data[0].postcode +
            ", " +
            data[0].town +
            "</a>";
          gridItem.append(addressTitle, addressString);
          grid.append(gridItem);
          Object.assign(config, {
            location: `${data[0].address_line_1}, ${data[0].postcode}, ${data[0].town}`,
          });

          document
            .getElementById("calendarButton")
            .addEventListener("click", (event) => {
              atcb_action(config, document.getElementById("calendarButton"));
              event.stopImmediatePropagation();
            });
        });
      } else {
        sessionStorage.removeItem("Access");
      }
    })
    .catch((error) => console.log("error", error));
}
