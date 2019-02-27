var assert = require("assert");

const TriCount = require("../src/TriCount");

describe("TriCount", function() {
  describe("#count()", function() {
    const tricount = new TriCount();
    it("should satisfy example 1", function() { 
      assert.equal(3, tricount.count(1, 2));
    });

    it("should satisfy example 2", function() {
      assert.equal(4, tricount.count(9, 10));
    });

    it("should satisfy example 3", function() {
      assert.equal(-1, tricount.count(1, 1000000));
    });

    it("should satisfy example 4", function() {
      assert.equal(83540657, tricount.count(19, 1000));
    });
  });
});