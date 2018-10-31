$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();


  $("#up").on('click', function() {
    thermostat.up();
    updateTemperature();
  });

  $("#down").on('click', function() {
    thermostat.down();
    updateTemperature();
  });

function updateTemperature() {
    $('#temperature').text(thermostat.degrees);
  };
});
