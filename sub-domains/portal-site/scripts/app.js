sessionStorage.clear();
// default api request headers
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
// generic api request options
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};
// event listners
document.getElementById('submitButton').addEventListener('click', () => {
  loginRequest();
});
document.getElementById('submitButton').addEventListener('touchstart', () => {
  loginRequest();
});
window.addEventListener("load", (event) => {
  sessionStorage.clear();
});
// login user if they have a valid account by fetching the access JWT token
function loginRequest() {
  var raw = JSON.stringify({
    "username": document.getElementById("username").value,
    "password": document.getElementById("password").value
  });
  Object.assign(requestOptions, {body: raw});
  fetch("https://web-production-abcdc.up.railway.app/auth/jwt/create/", requestOptions)
    .then(response => {
      if (response.ok) {
        response.json().then(data => {
          sessionStorage.setItem('Access', data.access);
          sessionStorage.setItem('Refresh', data.refresh);
          document.getElementById('errorDisplay').innerText = null;
          window.location.href = '/html/home.html';
        }) 
      } else {
        tokenRefresh();
        document.getElementById('errorDisplay').innerText = 'Invalid Login. Please try again.';
      }
    })
    .catch(error => console.log('error', error));
}
// if access token has expired, retrieve a new one using the refresh token
function tokenRefresh() {
  var raw = JSON.stringify({
    "refresh": sessionStorage.getItem('Refresh')
  });
  Object.assign(requestOptions, {body: raw});

  fetch("https://web-production-abcdc.up.railway.app/auth/jwt/refresh/", requestOptions)
    .then(response => {
      if (response.ok) {
        response.json().then(data => {
          sessionStorage.setItem('Access', data.access);
          sessionStorage.setItem('Refresh', data.refresh);
          window.location.href = '/html/home.html';
        }) 
      } else {
        document.getElementById('errorDisplay').innerText = 'Invalid Login. Please try again.';
      }
    })
    .catch(error => console.log('error', error));
}