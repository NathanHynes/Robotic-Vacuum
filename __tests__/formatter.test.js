/*jshint esversion: 6 */

const Formatter = require('../src/formatter');

describe('Formatter', () => {
  describe('#formatInput', () => {
    test("takes input string and formats to array", () => {
      const data = "5 4";
      expect(Formatter.formatInput(data)).toEqual(["5 4"]);
    });
  });
});
