$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  updateEnergyUsage();

  $("#up").on('click', function() {
    thermostat.up();
    updateTemperature();
    updateEnergyUsage();
  });

  $("#down").on('click', function () {
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

  $("#select-city").submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=77380d472b8cd2201e8db5af55c82a7c';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  }

  function updateTemperature() {
    $('#temperature').text(thermostat.degrees);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  function updateEnergyUsage() {
    $('#energy_usage').text(thermostat.energyUsage());
  };

});
