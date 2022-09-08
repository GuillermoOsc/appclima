
const axios = require("axios")
const API_KEY = "insertar clave api"  // Implementar variables de entorno(datos sensibles)

const Weather = require("../model/Weather")

exports.renderHomePage = (req, res) => {
  res.render("index")
}

exports.getWeather = (req, res) => {
  const city = req.body.city
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

  const weather = new Weather(req.body.city)
  weather.validateUserInput()

  if (weather.errors.length) {
    res.render("index", {
      error: weather.errors.toString()
    })
  } else {
    axios.get(url).then((response) => {
      const { temp: temperature } = response.data.main
      const { name: location } = response.data
      res.render("index", {
        weather: `Temperatura actual ${temperature} en ${location}.`
      })
    }).catch((error) => {
      console.log(error)
    })
  }
}

exports.renderAboutPage = (req, res) => {
  res.render("about")
}
