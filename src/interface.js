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

  $("#city_name").on('click', function (){
    console.log("submit button clicked")
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.degrees);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  function updateEnergyUsage() {
    $('#energy_usage').text(thermostat.energyUsage());
  };

});

$.ajax({
  url: "https://api.openweathermap.org/data/2.5/weather?",
  data: {
    q: "London",
    appid: "77380d472b8cd2201e8db5af55c82a7c",
    units: "metric",
  },
  type: "GET",
  dataType: "json",
})

.done(function(json) {
  $("<h3>").text(json.main["temp"]).appendTo("body");
  $("<div class=\"content\">").html(json.html).appendTo("body");
})

.fail(function( xhr, status, errorThrown ) {
  alert( "Sorry, there was a problem!" );
  console.log( "Error: " + errorThrown );
  console.log( "Status: " + status );
  console.dir( xhr );
})

// .always(function( xhr, status ) {
//   alert( "The request is complete!" );
// });
