import moment from "moment";
import "./style.scss";

window.addEventListener("load", () => {
  const buttonToTop = document.querySelector("#button_clients__to_top");
  buttonToTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });

  fetch(
    "https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const tbody = document.querySelector(".tbody_clients");
      if (tbody) {
        const fragment = document.createDocumentFragment();
        let balanceMax = 0;
        data.forEach((i, index) => {
          const tr = document.createElement("tr");
          tr.setAttribute("scope", "row");

          const id = document.createElement("td");
          id.textContent = i.index;

          const name = document.createElement("td");
          name.textContent = i.name;

          const company = document.createElement("td");
          company.textContent = i.company;

          const email = document.createElement("td");
          email.textContent = i.email;

          const phone = document.createElement("td");
          phone.textContent = i.phone;

          const balance = document.createElement("td");
          balance.textContent = i.balance;

          const remove = document.createElement("td");
          const removeButton = document.createElement("button");
          removeButton.setAttribute("type", "button");

          removeButton.classList.add("btn", "btn-danger", "btn-sm");
          removeButton.textContent = "Удалить";
          removeButton.addEventListener("click", () => {
            const res = confirm(
              " Вы действительно хотите удалить  пользователя?"
            );
            if (res) {
              tr.remove();
              const alert = document.querySelector(".alert");
              alert.classList.remove("hidden");
              setTimeout(function () {
                alert.classList.add("hidden");
              }, 3000);
            }
          });

          remove.append(removeButton);

          const registered = document.createElement("td");
          registered.textContent = moment(i.registered.replace(" ", "")).format(
            "DD.MM.YYYY"
          );
          tr.append(
            id,
            name,
            company,
            email,
            phone,
            balance,
            registered,
            remove
          );
          fragment.append(tr);

          balanceMax =
            balanceMax < i.balance.replace(/\D/g, "")
              ? i.balance.replace(/\D/g, "")
              : balanceMax;
        });

        tbody.append(fragment);

        const male = data.filter((i) => i.gender === "male");
        const female = data.length - male.length;

        const maleDiv = document.querySelector(".male");
        const femaleDiv = document.querySelector(".female");
        const maxBalanceDiv = document.querySelector(".max_balance");

        maleDiv.textContent = `Мужчины:${male.length} /`;
        femaleDiv.textContent = `Женщины:${female} `;
        maxBalanceDiv.textContent = `Максимальный баланс:$${balanceMax / 100} `;
      }
    });
});
