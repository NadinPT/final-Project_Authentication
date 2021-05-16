import { save, read } from "../../app/localstorage.js";
import $ from "jquery";
import "./style.scss";

window.addEventListener("load", () => {
  const form = document.querySelector("#register");
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const { email, password } = read();
    const formData = new FormData(form);
    const passwordForm = formData.get("password");
    const passwordConfirmForm = formData.get("password_confirm");
    const emailForm = formData.get("email");
    console.log(emailForm);
    console.log(email, password);
    if (passwordConfirmForm !== passwordForm) {
      alert("Пароли не совпадают");
    } else if (emailForm !== email) {
      save({ password: passwordForm, email: emailForm, auth: true });
      window.location.href = "./index.html";
    } else {
      alert("данный пользователь уже зарегистрирован");
    }
  });
});
