// find previous page before this one and save
function findPreviousPage() {
  if (document.referrer.includes("customers.html") || document.referrer.includes("bookings.html") || document.referrer.includes("home.html")) {
    sessionStorage.setItem("Starting Page", document.referrer);
    document.getElementById('back').href = sessionStorage.getItem('Starting Page');
   }
  else if (document.referrer.includes("booking_detail.html")) {
    document.getElementById('back').href = sessionStorage.getItem('Starting Page');
  } else {
    sessionStorage.setItem("Previous Page",  document.referrer);
    document.getElementById('back').href = sessionStorage.getItem('Previous Page');
  }
}
findPreviousPage();
const customer_id = sessionStorage.getItem("Customer ID");

// generic api request headers
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `JWT ${sessionStorage.getItem("Access")}`);

// event listeners for buttons
document.getElementById("edit").addEventListener("click", (event) => {
  document.getElementById("errorDisplay").innerText = null;
  if (document.getElementById('grid').style.display != 'none') {
    document.getElementById("grid").style.display = "none";
    document.getElementById("bookingGrid").style.display = "none";
    document.getElementById("bookingHeading").style.display = "none";
    document.getElementById("addBookingDroplets").style.display = "none";
    document.getElementById("editCustomerForm").style.display = "block";
  } else {
    document.getElementById("grid").style.display = "grid";
    document.getElementById("bookingGrid").style.display = "grid";
    document.getElementById("bookingHeading").style.display = "block";
    document.getElementById("addBookingDroplets").style.display = "flex";
    document.getElementById("editCustomerForm").style.display = "none";
  }
});

document.getElementById("delete").addEventListener("click", (event) => {
  if (confirm("Are you sure you wish to delete this customer? This will delete all bookings associated to this customer!") == true) {
    deleteCustomer();
  }
});

document.getElementById("submitButton").addEventListener("click", (event) => {
  updateCustomer();
});

document.getElementById("addButton").addEventListener("click", (event) => {
  addBooking();
});

document.getElementById("add").addEventListener("click", (event) => {
  if (document.getElementById('bookingGrid').style.display != 'none') {
    document.getElementById("bookingGrid").style.display = "none";
    document.getElementById("addBookingForm").style.display = "block";
  } else {
    document.getElementById("bookingGrid").style.display = "grid";
    document.getElementById("addBookingForm").style.display = "none";
  }
});

window.addEventListener("load", (event) => {
  document.getElementById('dateTime').value = new Date().toISOString().slice(0, 16);
  customerDetail();
  getCustomerBookings();
});

// get details about a specific customer
function customerDetail() {
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    `https://web-production-abcdc.up.railway.app/54633/customers/${customer_id}/`,
    requestOptions
  ).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        console.log(data);
        document.getElementById("heroHeading").innerText = data.full_name;
        let grid = document.getElementById("grid");
        let gridItem = document.createElement("div");
        let container = document.createElement('div');
        let customerTitle = document.createElement("p");
        let phone = document.createElement("p");
        let email = document.createElement("p");
        customerTitle.setAttribute("class", "subHeading");
        gridItem.setAttribute("class", "servicesGridItem");
        container.setAttribute('class', 'flexContainer');
        phone.setAttribute("class", "sentence");
        email.setAttribute("class", "sentence email");
        customerTitle.innerText = "Details";
        phone.innerHTML = "<b>Phone</b><br>" + data.phone_number;
        email.innerHTML = "<b>Email</b><br>" + data.email;
        container.append(phone, email)
        gridItem.append(customerTitle, container);
        grid.append(gridItem);

        document.getElementById("name").value = data.full_name;
        document.getElementById("phone").value = data.phone_number;
        document.getElementById("email").value = data.email;

        let addressItem = document.createElement("div");
        let addressTitle = document.createElement("p");
        let address1 = document.createElement("p");
        addressTitle.setAttribute("class", "subHeading");
        addressItem.setAttribute("class", "servicesGridItem");
        address1.setAttribute("class", "sentence");
        addressTitle.innerText = "Address";
        let linkText = `${data.address.address_line_1},+${data.address.postcode},+${data.address.town}`;
        linkText = linkText.replace(/\s/g, '');
        let link = 'https://maps.google.com/maps?q=' + linkText;
        address1.innerHTML = 
          `<a target='blank' href=${link}>` +
          data.address.address_line_1 +
          ", " +
          data.address.postcode +
          ", " +
          data.address.town +
          "</a>";
        addressItem.append(addressTitle, address1);
        grid.append(addressItem);

        sessionStorage.setItem('Address ID', data.address.id)
        document.getElementById("address1").value = data.address.address_line_1;
        document.getElementById("address2").value = data.address.address_line_2;
        document.getElementById("postcode").value = data.address.postcode;
        document.getElementById("town").value = data.address.town;
      });
    } else {
      sessionStorage.removeItem("Access");
    }
  });
}
// update a specific customer
function updateCustomer() {
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
    method: "PUT",
    headers: myHeaders,
    body: raw,
  };

  fetch(`https://web-production-abcdc.up.railway.app/54633/customers/${customer_id}/`, requestOptions)
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
// delete a customer
function deleteCustomer() {
  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
  };

  fetch(`https://web-production-abcdc.up.railway.app/54633/customers/${customer_id}/`, requestOptions)
    .then((response) => {
      if (response.ok) {
          document.getElementById("errorDisplay").innerText = null;
          window.location.href='/html/customers.html';
      } else {
        document.getElementById("errorDisplay").innerText =
          "Unable to delete customer!";
      }
    })
    .catch((error) => console.log("error", error));
}
// get a customer's bookings
function getCustomerBookings() {
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  fetch(`https://web-production-abcdc.up.railway.app/54633/customers/${customer_id}/bookings/?ordering=-date`, requestOptions)
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          displayBookings(data)
        });
      } else {
        sessionStorage.removeItem('Access');
      }
    })
    .catch((error) => console.log("error", error));
}
// display a customer's bookings
function displayBookings(data) {
    document.getElementById('errorDisplay').innerText = null;
    for (let i = 0; i < Object.keys(data).length; i++) {
      let grid = document.getElementById('bookingGrid');
      let gridItem = document.createElement('div');
      let container = document.createElement('div');
      let title = document.createElement('p');
      let time = document.createElement('p');
      let date = document.createElement('p');
      let price = document.createElement('p');
      let detail = document.createElement('p');
      gridItem.setAttribute('class', 'servicesGridItem');
      container.setAttribute('class', 'flexContainer');
      title.setAttribute('class', 'subHeading');
      date.setAttribute('class', 'sentence');
      time.setAttribute('class', 'sentence');
      price.setAttribute('class', 'sentence');
      detail.setAttribute('class', 'sentence notes');
      title.innerText = data[i].title;
      let readableDate =   data[i].date.slice(8, 10) + '-' + data[i].date.slice(5, 7) + '-' + data[i].date.slice(0, 4);
      time.innerHTML = '<b>Time</b><br>' +  data[i].date.slice(11, 16);
      date.innerHTML = '<b>Date</b><br>' + readableDate;
      price.innerHTML = '<b>Price</b><br>£' + data[i].price;
      detail.innerHTML = '<b>Notes</b><br>' + data[i].detail;
      container.append(time, date);
      gridItem.append(title,container);
      grid.append(gridItem);
      gridItem.addEventListener("click", (event) => {
        sessionStorage.setItem('Customer ID', customer_id);
        sessionStorage.setItem('Booking ID', data[i].id);
        sessionStorage.setItem('Previous Page', 'customer_detail.html');
        window.location.href = '/html/booking_detail.html';
      });
    }
}
// add a booking to a specific customer
function addBooking() {
  var raw = JSON.stringify({
    title: document.getElementById("title").value,
    detail: document.getElementById("notes").value,
    price: document.getElementById("price").value,
    date: document.getElementById("dateTime").value
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };
  fetch(`https://web-production-abcdc.up.railway.app/54633/customers/${customer_id}/bookings/`, requestOptions)
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          document.getElementById("errorDisplay").innerText = null;
          window.location.reload();
          document.getElementById("grid").style.display = "grid";
          document.getElementById("addBookingForm").style.display = "none";
        });
      } else {
        document.getElementById("errorDisplay").innerText =
          "Invalid details supplied. Please try again!";
      }
    })
    .catch((error) => console.log("error", error));
}