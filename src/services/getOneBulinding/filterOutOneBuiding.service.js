

const filterOutOneBuiding = (allbuidings, buildingId) => new Promise((resolve, reject) => {
  if (buildingId < 1) {
    reject(new Error('Building id needed!'));
  }

  const oneBuilding = allbuidings.buildings.filter(buidling => buidling._id.toString() === buildingId);
  resolve(oneBuilding);
});

module.exports = { filterOutOneBuiding };
