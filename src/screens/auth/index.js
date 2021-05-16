import { save, read } from "../../app/localstorage.js";
import $ from "jquery";
import "./style.scss";

window.addEventListener("load", () => {
  const { email, password } = read();
  const form = document.querySelector("#email");
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const formData = new FormData(form);
    const passwordForm = formData.get("password");
    const emailForm = formData.get("email");
    if (emailForm !== email || password !== passwordForm) {
      alert(`Не вверно введен пароль или email
          или вы не зарегистрированы`);
    } else {
      save({ email, password, auth: true });
      window.location.href = "./index.html";
    }
  });
});
