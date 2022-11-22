const assert = require("assert");
const Park = require("../models/park.js");
const Dinosaur = require("../models/dinosaur.js");

describe("Park", function () {
  let park;
  let dino1;
  let dino2;
  let dino3;
  let dino4;

  beforeEach(function () {
    park = new Park("Dino Land", 50);
    dino1 = new Dinosaur("Diplodicus", "Herbivore", 30);
    dino2 = new Dinosaur("T-rex", "Carnivore", 50);
    dino3 = new Dinosaur("Stegasaurus", "Herbivore", 50);
    dino4 = new Dinosaur("Triceratops", "Omnivore", 50);
  });

  it("should have a name", function () {
    const actual = park.name;
    assert.strictEqual(actual, "Dino Land");
  });

  it("should have a ticket price", function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50);
  });

  it("should have a collection of dinosaurs", function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it("should be able to add a dinosaur to its collection", function () {
    const actual = park.addDino(dino1);
    assert.strictEqual(actual, 1);
  });

  it("should be able to remove a dinosaur from its collection", function () {
    park.addDino(dino1);
    park.addDino(dino2);
    const actual = park.removeDino(dino1);
    assert.deepStrictEqual(actual, [dino2]);
  });

  it("should be able to find the dinosaur that attracts the most visitors", function () {
    park.addDino(dino1);
    park.addDino(dino2);
    const actual = park.mostPopDino();
    assert.strictEqual(actual, dino2);
  });

  it("should be able to find all dinosaurs of a particular species", function () {
    park.addDino(dino1);
    park.addDino(dino2);
    const actual = park.findSpecies("Diplodicus");
    assert.deepStrictEqual(actual, [dino1]);
  });

  it("should be able to calculate the total number of visitors per day", function () {
    park.addDino(dino1);
    park.addDino(dino2);
    const actual = park.totalVisitors();
    assert.strictEqual(actual, 80);
  });

  it("should be able to calculate the total number of visitors per year", function () {
    park.addDino(dino1);
    park.addDino(dino2);
    const actual = park.visitorsPerYear();
    assert.strictEqual(actual, 29200);
  });

  it("should be able to calculate total revenue for one year", function () {
    park.addDino(dino1);
    park.addDino(dino2);
    const actual = park.yearlyRevenue();
    assert.strictEqual(actual, 1460000);
  });

  it("should be able to remove all dinos of a given species", function () {
    park.addDino(dino1);
    park.addDino(dino2);
    const actual = park.removeSpecies("T-rex");
    assert.deepStrictEqual(actual, [dino1]);
  });

  it("should be able to count how many dinos of each diet type there are", function () {
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.addDino(dino4);
    const actual = park.countDiets();
    assert.deepStrictEqual(actual, { Carnivore: 1, Herbivore: 2, Omnivore: 1 });
  });
});
