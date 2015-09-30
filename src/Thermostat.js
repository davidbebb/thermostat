function Thermostat() {
  this.temperature = 20;
  this.lowerLimit = 10;
};

Thermostat.prototype.setTemp = function(temp) {
  this.temperature = temp;
};

Thermostat.prototype.getTemp = function() {
  return this.temperature;
};

Thermostat.prototype.increment = function(number) {
  this.temperature = this.temperature + number;
};

Thermostat.prototype.decrement = function(number) {
  this.temperature = this.temperature - number;
};

Thermostat.prototype.getLowerLimit = function() {
  return this.lowerLimit;
};

Thermostat.prototype.setLowerLimit = function(number) {
  this.lowerLimit = number;
};

Thermostat.prototype.getUpperLimit = function() {
  return this.lowerLimit;
};

Thermostat.prototype.setUpperLimit = function(number) {
  this.lowerLimit = number;
};

Thermostat.prototype.setPowerSaving = function(bool) {
  if (bool) {
    this.setUpperLimit(23);
  } else {
    this.setUpperLimit(33);
  }
};
