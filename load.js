if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./serviceWorker.js")
    .then((reg) => console.log("Registro exitoso"))
    .catch((error) => console.log(error));
}
