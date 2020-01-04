const Formatter = require('../src/formatter');

describe('Formatter', () => {
  describe('#formatInput', () => {
    test("takes input string and formats to array", () => {
      const data = "5 4";
      expect(Formatter.formatInput(data)).toEqual(["5 4"]);
    });

    test("takes input string with linebreaks and formats to array", () => {
      const data = "5 4\n1 2\nNNESEESWNWW";
      expect(Formatter.formatInput(data)).toEqual(["5 4", "1 2", "NNESEESWNWW"]);
    });
  });

  describe('#convertStrToCoord', () => {
    test("converts dimension string into integer array", () => {
      const dimension = "5 4";
      expect(Formatter.convertStrToCoord(dimension)).toEqual([5,4]);
    });
  });
});
