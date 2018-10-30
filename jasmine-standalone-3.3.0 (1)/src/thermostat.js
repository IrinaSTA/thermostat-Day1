function Thermostat() {
  this.degrees = 20;
  this.powerSavingMode = true;
  this.maxTemp = 25;
};

Thermostat.prototype.degrees = function() {
  return this.degrees;
};

Thermostat.prototype.powerSavingMode = function() {
  return this.powerSavingMode;
};

Thermostat.prototype.up = function() {
  if (this.degrees < this.maxTemp) {
    this.degrees += 1;
  }
};

Thermostat.prototype.turnOffPowerSavingMode = function() {
  this.powerSavingMode = false;
  this.maxTemp = 32;
}

Thermostat.prototype.down = function() {
  if (this.degrees > 10) {
    this.degrees -= 1;
  };
};
