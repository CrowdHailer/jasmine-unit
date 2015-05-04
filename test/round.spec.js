var round = require('../src/lib/round');

describe('A suite', function() {
    it('contains spec with an expectation', function() {
      expect(true).toBe(true);
    });

    it('contains spec round', function() {
        expect(2).toBe(round());
    });
});
