function paginationLimit(jsonData, limit, paginationFlag) {
  const indicesInTotal = jsonData.length;
  let pagination = 20;
  let prevPagination = 0;

  paginationFlag = Math.round(paginationFlag);
  console.log('paginationFlag', paginationFlag);
  switch (paginationFlag) {
    case 0:
      pagination = 10;
      prevPagination = 0;
      break;
    case 1:
      pagination = 20;
      prevPagination = 11;
      break;
    case 2:
      pagination = 30;
      prevPagination = 21;
      break;
    case 3:
      pagination = 40;
      prevPagination = 31;
      break;
    case 4:
      pagination = indicesInTotal;
      prevPagination = 41;
      break;
    default:
      pagination = 20;
      prevPagination = 0;
      break;
  }

  var finalArrForItems = [];
  console.log('prevPagination', prevPagination, 'pagination', pagination);
  // starting at a specific data with prevPagination and finalPagination
  for (let i = prevPagination; i < pagination; i++) {
    const item = jsonData[i];
    finalArrForItems.push(item);
  }

  return finalArrForItems;
}

module.exports = {
  paginationLimit
};
