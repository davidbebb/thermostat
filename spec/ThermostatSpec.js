describe('Thermostat', function() {

  describe('Can set temperature', function() {
    beforeEach(function() {
      thermostat = new Thermostat;
    });

    it('can set the temperature to 22degC', function() {
      thermostat.setTemp(22);
      expect(thermostat.getTemp()).toEqual(22);
    });

    it('can increment by 1', function() {
      thermostat.increment(1);
      expect(thermostat.getTemp()).toEqual(21);
    });

    it('can decrement by 1', function() {
      thermostat.decrement(1);
      expect(thermostat.getTemp()).toEqual(19);
    });
  });

  describe('Can set temperature limits', function() {
    it('can set lower limit to 5degC', function() {
      thermostat.setLowerLimit(5);
      expect(thermostat.getLowerLimit()).toEqual(5);
    });

    it('can set upper limit to 200degC', function() {
      thermostat.setUpperLimit(200);
      expect(thermostat.getUpperLimit()).toEqual(200);
    });
  });

  describe('Power saving modes', function() {
    it('can enter power saving mode', function() {
      thermostat.setPowerSaving(true);
      expect(thermostat.getUpperLimit()).toEqual(23);
    });

    it('can exit power saving mode', function() {
      thermostat.setPowerSaving(false);
      expect(thermostat.getUpperLimit()).toEqual(33);
    });
  });
});
