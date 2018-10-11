const data = require('../utils');
const utils = require('../utils/utils');
const _ = require('lodash');

// dedup utility
function dedup(finalData) {
  let brandObj = {};
  let colorObj = {};

  data.dummyData.forEach((item, index) => {
    brandObj[item.brand] = item.brand;
    colorObj[item.primaryColor] = item.primaryColor;
  });

  let finalObj = {
    brands: Object.keys(brandObj),
    colors: Object.keys(colorObj),
    data: finalData
  };

  return finalObj;
}

function getItems(req, res) {
  let paginationFlag = req.query.pagination;
  let paginationData = utils.paginationLimit(
    data.dummyData,
    10,
    paginationFlag
  );
  const finalObj = dedup(paginationData);
  res.send(finalObj);
}

function sortItems(req, res) {
  req.body.sortItemReq = JSON.parse(req.body.sortItemReq);
  console.log('req.body', req.body);
  const minLimit = parseInt(req.body.sortItemReq.minLimit);
  const maxLimit = parseInt(req.body.sortItemReq.maxLimit);
  let sortedData = data.dummyData.filter((item, index) => {
    if (item.price > minLimit && item.price < maxLimit) {
      return item;
    }
  });
  const sortedResultObj = {
    sorted: true,
    data: sortedData
  };
  res.send(sortedResultObj);
}

// This controller is not used anywhere but kept as for reference
function sortWithPrice(req, res) {
  const sortFlag = parseInt(req.query.sortFlag);
  const paginationFlag = req.query.pagination;
  const sortedArr = _.sortBy(data.dummyData, i => i.price);
  let finalDataToPaginate = null;
  if (sortFlag === 1) {
    finalDataToPaginate = sortedArr;
  } else if (sortFlag === 2) {
    finalDataToPaginate = sortedArr.reverse();
  }
  const paginationData = utils.paginationLimit(
    finalDataToPaginate,
    10,
    paginationFlag
  );
  const finalObj = dedup(paginationData);
  res.send(finalObj);
}

function filterItems(req, res) {
  const productData = data.dummyData;
  // console.log('req.body', req.body, req.body.filterReq);
  let rawFilterProductReqArr = JSON.parse(req.body.filterReq);
  const filterProductRequestArr = {
    primaryColor:
      rawFilterProductReqArr.primaryColor === ''
        ? []
        : rawFilterProductReqArr.primaryColor.split(','),
    brand:
      rawFilterProductReqArr.brands === ''
        ? []
        : rawFilterProductReqArr.brands.split(',')
  };
  const currentFilterCategory = req.body.currentFilterCategory;

  // Two pass filter approach to solve multi-filter functionality
  let filterpass1ForBrand = [];
  let filterpass1ForColors = [];
  let items = productData;
  let finalData = null;
  if (
    filterProductRequestArr.brand.length === 0 ||
    filterProductRequestArr.primaryColor.length === 0
  ) {
    if (
      filterProductRequestArr.primaryColor.length === 0 &&
      filterProductRequestArr.brand.length === 0
    ) {
      let dataToBeSent = data.dummyData;
      const finalObj = dedup(dataToBeSent);
      res.send(finalObj);
    } else {
      finalData = items.filter(item => {
        let matchedItem = null;
        filterProductRequestArr[currentFilterCategory].forEach(prod => {
          if (prod === item.brand || prod === item.primaryColor) {
            matchedItem = item;
          }
        });
        if (matchedItem) {
          return matchedItem;
        }
      });
      console.log('finalData', finalData);
    }
  } else {
    // filter pass 1 for brand
    items.forEach(item => {
      filterProductRequestArr.brand.forEach(i => {
        if (item.brand === i) {
          filterpass1ForBrand.push(item);
        }
      });
    });

    // filter pass 1 for colors
    items.forEach(item => {
      filterProductRequestArr.primaryColor.forEach(i => {
        if (item.primaryColor === i) {
          filterpass1ForColors.push(item);
        }
      });
    });

    console.log(
      'Filter pass 1 results',
      filterpass1ForBrand,
      filterpass1ForColors
    );

    let filterpass2ForBrands = [];
    let filterpass2ForColors = [];

    // filter pass 2 for brands filtering with colors
    filterpass1ForBrand.forEach(item => {
      filterProductRequestArr.primaryColor.forEach(i => {
        if (item.primaryColor === i) {
          filterpass2ForBrands.push(item);
        }
      });
    });

    // filter pass 2 for colors filtering with brands
    filterpass1ForColors.forEach(item => {
      filterProductRequestArr.brand.forEach(i => {
        if (item.brand === i) {
          filterpass2ForColors.push(item);
        }
      });
    });

    console.log(
      'Filter pass 2 results',
      filterpass2ForBrands,
      filterpass2ForColors
    );
    finalData = filterpass2ForBrands;
  }
  items.data = finalData;
  console.log('final items data in backend', finalData);
  res.send(finalData);
}

module.exports = {
  getItems,
  sortWithPrice,
  filterItems,
  sortItems
};
