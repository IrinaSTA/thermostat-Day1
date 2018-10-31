$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  updateEnergyUsage();

  $("#up").on('click', function() {
    thermostat.up();
    updateTemperature();
    updateEnergyUsage();
  });

  $("#down").on('click', function() {
    thermostat.down();
    updateTemperature();
    updateEnergyUsage();
  });

  $("#reset").on('click', function() {
    thermostat.reset();
    updateTemperature();
    updateEnergyUsage();
  });

  $("#pwr_svg_on").on('click', function(){
    thermostat.turnOnPowerSavingMode();
    updateEnergyUsage();
  });

  $("#pwr_svg_off").on('click', function (){
    thermostat.turnOffPowerSavingMode();
    updateEnergyUsage();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.degrees);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  function updateEnergyUsage() {
    $('#energy_usage').text(thermostat.energyUsage());
  };

});
