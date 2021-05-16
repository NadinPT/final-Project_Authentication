import bootstrap from "bootstrap";
import { save, read } from "./localstorage";
import "../scss/style.scss";

window.addEventListener("load", () => {
  const { email, password, auth } = read();
  if (
    !auth &&
    window.location.pathname.lastIndexOf("auth.html") === -1 &&
    window.location.pathname.lastIndexOf("register.html") === -1
  ) {
    window.location.href = "./auth.html";
  }
  const logOutBtn = document.querySelector("#log_out");
  logOutBtn.addEventListener("click", () => {
    save({
      email,
      password,
      auth: "",
    });
    window.location.href = "./auth.html";
  });
});
