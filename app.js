const weather = new Weather("wates", "ina");
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);

document.getElementById("w-change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  // Change location
  weather.changeLocation(city, state);

  // Set location in LS
  ///storage.setLocationData(city, state);

  // Get and display weather
  getWeather();
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
  // Close modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
      console.log(results);
    })
    .catch(err => console.log(err));
}
