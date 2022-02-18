/* 
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  perChairWood = 3;
  perTableWood = 10;
  perBedWood = 50;

  /*   WoodQuantity */

  const chairWoodQuantity = perChairWood * chairQuantity;
  const tableWoodQuantity = perTableWood * tableQuantity;
  const bedWoodQuantity = perBedWood * bedQuantity;

  /* Total Wood Quantity */

  TotalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
  return TotalWood;
}

const neededFurniture = woodCalculator(10, 100, 1000);
console.log("I need Total", neededFurniture, "c/ft Wood");
