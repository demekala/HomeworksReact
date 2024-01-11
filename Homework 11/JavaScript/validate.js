// TODO : CHECK if token exsists
// TODO : if token exsists let user to stay on this page
// TODO : if token does not exsist redirect user to login page

const token = localStorage.getItem("token");

if (token) {
  window.location.href = "./home.html";
  return;
} else {
  window.location.href = "./index.html";
  return;
}
