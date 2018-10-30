function Thermostat() {
  this.degrees = 20;
  this.powerSavingMode = true;
};

Thermostat.prototype.degrees = function() {
  return this.degrees;
};

Thermostat.prototype.powerSavingMode = function() {
  return this.powerSavingMode;
};

Thermostat.prototype.up = function() {
  this.degrees += 1;
};

Thermostat.prototype.down = function() {
  if (this.degrees > 10) {
    this.degrees -= 1;
  };
};
