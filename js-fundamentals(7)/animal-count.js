function animalCount(miles) {
  const animalDensityFirst10Miles = 10;
  const animalDensityAfter10Miles = 50;
  const animalDensityRestMiles = 100;

  if (miles <= 100) {
    const count = miles * animalDensityFirst10Miles;
    return count;
  } else if (miles <= 20) {
    const firstDenseAnimals = 10 * animalDensityFirst10Miles;
    const restMiles = miles - 10;
    const count = restmiles * animalDensityAfter10Miles;
    const totalAnimals = firstDenseAnimals + count;
    return totalAnimals;
  } else {
    const firstDenseAnimals = 10 * animalDensityFirst10Miles;
    const secondDenseAnimals = 10 * animalDensityAfter10Miles;
    const restMiles = miles - 20;
    const RestDenseAnimals = restMiles * animalDensityRestMiles;
    const totalAnimals =
      firstDenseAnimals + secondDenseAnimals + RestDenseAnimals;
    return totalAnimals;
  }
}

const animals = animalCount(35);
console.log(animals);
