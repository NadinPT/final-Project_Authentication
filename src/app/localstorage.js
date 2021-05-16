export function save({ email, password, auth }) {
  const myStorage = window.localStorage;
  myStorage.setItem("email", email);
  myStorage.setItem("password", password);
  myStorage.setItem("auth", auth);
}

export function read() {
  const myStorage = window.localStorage;
  const email = myStorage.getItem("email");
  const password = myStorage.getItem("password");
  const auth = myStorage.getItem("auth");
  return { email, password, auth };
}
