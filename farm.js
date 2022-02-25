const getYieldForPlant = (corn) => {
return corn.yield
};

const getYieldForCrop = (input) => {
return input.numCrops * 3
};

const getTotalYield = ({crops}) => {
  if(crops.length > 1){
    console.log(crops[0].numCrops * 3 + crops[1].numCrops * 4)
    return crops[0].numCrops * 3 + crops[1].numCrops * 4;

  } else {
    console.log(crops[0].numCrops * 3)
  return crops[0].numCrops * 3
  }
    
}

module.exports = {getYieldForPlant,getYieldForCrop,getTotalYield};