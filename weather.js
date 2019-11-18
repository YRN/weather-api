class Weather {
  constructor(city, state) {
    this.apiKey = "e3ae0fdf29f6a31c57cb5ad92e7afb5b";
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}&units=metric`
    );

    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
