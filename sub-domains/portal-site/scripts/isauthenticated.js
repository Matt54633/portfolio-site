// check if user is authenticated on page load, if not clear any session values
function isAuthenticated() {
  if (sessionStorage.getItem("Access") == null) {
    sessionStorage.clear();
    window.location.href = "/html/unauthorised.html";
  }
}
window.addEventListener("load", (event) => {
  isAuthenticated();
});
window.addEventListener("refresh", (event) => {
  isAuthenticated();
});
//periodic function to check authentication
setInterval(function () {
  isAuthenticated();
}, 30000);
