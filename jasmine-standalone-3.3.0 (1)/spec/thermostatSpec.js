describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start at 20 degrees", function() {
    expect(thermostat.degrees).toEqual(20);
  });

  it("should start in power saving mode", function() {
    expect(thermostat.powerSavingMode).toEqual(true)
  });

  it("should increase the temperature with an up function", function() {
    thermostat.up();
    expect(thermostat.degrees).toEqual(21);
  });

  it("should decrease the temperature with a down function", function() {
    thermostat.down();
    expect(thermostat.degrees).toEqual(19);
  });

  it("should have a minimum temperature of 10 degrees", function() {
    while (thermostat.degrees > 10) {
      thermostat.down();
    };
    thermostat.down();
    expect(thermostat.degrees).toEqual(10);
  });

  it("should have a maximum temperature of 25 degrees on power saving mode", function() {
    while (thermostat.degrees < 25) {
      thermostat.up();
    };
    thermostat.up();
    expect(thermostat.degrees).toEqual(25);
  });

  it("should have a maximum temperature of 32 degrees if power saving mode is off", function() {
    thermostat.turnOffPowerSavingMode();
    while (thermostat.degrees < 32) {
      thermostat.up();
    };
    thermostat.up();
    expect(thermostat.degrees).toEqual(32);
  });
});
