var Roman = require('./../js/roman.js').romanModule;

describe('Roman', function() {
  it('should test whether a Roman Numeral I is true', function() {
    var romNum = new Roman()
    expect(romNum.Translate([1],1)).toEqual(["I"])
    // expect(triangle.side2).toEqual(4)
    // expect(triangle.side3).not.toEqual(6)
  });

  it('should test whether a Roman Numeral XIV is true', function() {
    var romNum = new Roman()
    expect(romNum.Translate([4,1],2)).toEqual(["IV","X"])
    // expect(triangle.side2).toEqual(4)
    // expect(triangle.side3).not.toEqual(6)
  });

  it('should test whether a Roman Numeral XCIX is true', function() {
    var romNum = new Roman()
    expect(romNum.Translate([9,9],2)).toEqual(["IX","XC"])
    // expect(triangle.side2).toEqual(4)
    // expect(triangle.side3).not.toEqual(6)
  });

  it('should test whether a Roman Numeral CII is true', function() {
    var romNum = new Roman()
    expect(romNum.Translate([2,0,1],3)).toEqual(["I","I","C"])
    // expect(triangle.side2).toEqual(4)
    // expect(triangle.side3).not.toEqual(6)
  });
});
