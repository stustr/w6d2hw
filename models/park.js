const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
};

Park.prototype.addDino = function (dino) {
  this.dinosaurs.push(dino);
  return this.dinosaurs.length;
};

Park.prototype.removeDino = function (dinosaur) {
  const dinosaurIndex = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(dinosaurIndex, 1);
  return this.dinosaurs;
};

Park.prototype.mostPopDino = function () {
  let mostPopDino = this.dinosaurs[0];
  for (const dino of this.dinosaurs) {
    if (dino.guestsAttractedPerDay > mostPopDino.guestsAttractedPerDay) {
      mostPopDino = dino;
    }
  }
  return mostPopDino;
};

Park.prototype.findSpecies = function (species) {
  let found = [];
  for (const dino of this.dinosaurs) {
    if (dino.species === species) {
      found.push(dino);
    }
  }
  return found;
};

Park.prototype.totalVisitors = function () {
  let totalVisitors = 0;
  for (const dino of this.dinosaurs) {
    totalVisitors += dino.guestsAttractedPerDay;
  }
  return totalVisitors;
};

Park.prototype.visitorsPerYear = function () {
  return this.totalVisitors() * 365;
};

Park.prototype.yearlyRevenue = function () {
  return this.visitorsPerYear() * this.ticketPrice;
};

Park.prototype.removeSpecies = function (species) {
  let filteredSpecies = this.dinosaurs.filter(function (dino) {
    return dino.species !== species;
  });
  this.dinosaurs = filteredSpecies;
  return filteredSpecies;
};

Park.prototype.countDiets = function () {
  const Carnivore = this.dinosaurs.filter(
    (dino) => dino.diet === "Carnivore"
  ).length;
  const Herbivore = this.dinosaurs.filter(
    (dino) => dino.diet === "Herbivore"
  ).length;
  const Omnivore = this.dinosaurs.filter(
    (dino) => dino.diet === "Omnivore"
  ).length;
  return { Carnivore, Herbivore, Omnivore };
};

module.exports = Park;
