let url = "https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=6f88826d767f323ad19cd282444924e9";
const apiMeteo = fetch(url)
                    .then(async response=> {
                        console.log(response);
                        const json = await response.json();
                        console.log(json);
                        console.log("Meteo:",json.weather[0].description);

                        let meteo = json.weather[0].description;
                        let temp = json.main.temp - 273.1;
                        let humidity = json.main.humidity;
                        let town = json.name;
                        let lat = json.coord.lat;
                        let long = json.coord.lon;

                        let infoMeteo = document.querySelector('h1');
                        let infos = document.querySelectorAll('h2');
                        infoMeteo.textContent = meteo;
                        infos[0].textContent = "Temperature: " + temp.toFixed(2) + "°c";
                        infos[1].textContent = "Humidity: " + humidity + "%";
                        infos[2].textContent = "Town: " + town;
                        infos[3].textContent = "Latitude: " + lat;
                        infos[4].textContent = "Longitude: " + long;

                        let imgMeteo = document.querySelectorAll('img');
                        switch(json.weather[0].description) {
                            case "clear sky":
                                imgMeteo[0].src = "https://openweathermap.org/img/wn/01d@2x.png";
                                break;
                            case "few clouds":
                                imgMeteo[0].src = "https://openweathermap.org/img/wn/02d@2x.png";
                                break;
                            case "scattered clouds":
                                imgMeteo[0].src = "https://openweathermap.org/img/wn/03d@2x.png";
                                break;
                            case "broken clouds":
                                imgMeteo[0].src = "https://openweathermap.org/img/wn/04d@2x.png";
                                break;
                            case "shower rain":
                                imgMeteo[0].src = "https://openweathermap.org/img/wn/09d@2x.png";
                                break;
                            case "rain":
                                imgMeteo[0].src = "https://openweathermap.org/img/wn/10d@2x.png";
                                break;
                            case "thunderstorm":
                                imgMeteo[0].src = "https://openweathermap.org/img/wn/11d@2x.png";
                                break;
                            case "snow":
                                imgMeteo[0].src = "https://openweathermap.org/img/wn/13d@2x.png";
                                break;
                            case "mist":
                                imgMeteo[0].src = "https://openweathermap.org/img/wn/50d@2x.png";
                                break;
                        }
                    });