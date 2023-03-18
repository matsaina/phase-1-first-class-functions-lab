const returnFirstTwoDrivers = (b) => {
  let a = b.slice(0, -2);
  return a;
};

const returnLastTwoDrivers = (b) => {
  let a = b.slice(2);
  return a;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (integer) => {
  return function (fare) {
    return fare * integer;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler  = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, whichDrivers) {
    return whichDrivers(drivers);
  };