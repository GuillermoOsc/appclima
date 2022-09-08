const Weather = function(data) {
  this.data = data
  this.errors = []
}

Weather.prototype.validateUserInput = function() {
if (this.data == "") {
  this.errors.push("Ingresar ciudad.")
  }
}

module.exports = Weather