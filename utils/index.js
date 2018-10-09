const dummyData = [
  {
    productId: 1376577,
    product: 'Roadster Men Black & Grey Checked Casual Shirt',
    discount: 0,
    brand: 'Roadster',
    img:
      'http://assets.myntassets.com/assets/images/1376577/2016/9/15/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'black',
    category: 'Shirts',
    mrp: 1299,
    price: 1299
  },
  {
    productId: 1979348,
    product: 'HIGHLANDER Men White Slim Fit Printed Casual Shirt',
    discount: 350,
    brand: 'Highlander',
    img:
      'http://assets.myntassets.com/assets/images/1979348/2017/12/5/11512457137542-HIGHLANDER-Men-White-Slim-Fit-Printed-Casual-Shirt-3001512457137360-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'white',
    category: 'Shirts',
    mrp: 999,
    price: 649
  },
  {
    productId: 6832736,
    product: 'WROGN Men Maroon Slim Fit Checked Casual Shirt',
    discount: 660,
    brand: 'Wrogn',
    img:
      'http://assets.myntassets.com/assets/images/6832736/2018/8/17/38d8e96d-c3ec-4e21-993a-49320069aef41534510489983-WROGN-Men-Maroon-Slim-Fit-Checked-Casual-Shirt-7381534510486-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'maroon',
    category: 'Shirts',
    mrp: 2199,
    price: 1539
  },
  {
    productId: 1862801,
    product: 'Roadster Men Maroon & Navy Blue Regular Fit Checked Casual Shirt',
    discount: 260,
    brand: 'Roadster',
    img:
      'http://assets.myntassets.com/assets/images/1862801/2018/2/9/11518155061506-Roadster-Men-Maroon--Navy-Blue-Regular-Fit-Checked-Casual-Shirt-8861518155061131-1.jpg',
    sizes: '38,40',
    gender: 'Male',
    primaryColor: 'maroon',
    category: 'Shirts',
    mrp: 1299,
    price: 1039
  },
  {
    productId: 7226490,
    product: "GAP Men's Blue & Burgundy Pattern Oxford Shirt in Stretch",
    discount: 0,
    brand: 'GAP',
    img:
      'http://assets.myntassets.com/assets/images/7226490/2018/9/18/dafd24f0-d9e2-4c70-ae2c-940d75958b071537272085177-GAP-Mens-Blue--Burgundy-Pattern-Oxford-Shirt-in-Stretch-8981-1.jpg',
    sizes: '38,40',
    gender: 'Male',
    primaryColor: 'blue',
    category: 'Shirts',
    mrp: 2499,
    price: 2499
  },
  {
    productId: 2127876,
    product: 'Roadster Men Black Regular Fit Solid Casual Shirt',
    discount: 0,
    brand: 'Roadster',
    img:
      'http://assets.myntassets.com/assets/images/2127876/2017/11/23/11511431472633-Roadster-Men-Black-Regular-Fit-Solid-Casual-Shirt-8801511431472500-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'black',
    category: 'Shirts',
    mrp: 999,
    price: 999
  },
  {
    productId: 1265384,
    product: 'Highlander White Solid Slim Fit Casual Shirt',
    discount: 400,
    brand: 'Highlander',
    img:
      'http://assets.myntassets.com/assets/images/1265384/2018/2/7/11517995803839-Highlander-White-Slim-Fit-Casual-Shirt-7581517995803601-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'white',
    category: 'Shirts',
    mrp: 999,
    price: 599
  },
  {
    productId: 4319204,
    product: 'HIGHLANDER Men Pack Of 2 Solid Shirts',
    discount: 900,
    brand: 'Highlander',
    img:
      'http://assets.myntassets.com/assets/images/4319204/2018/3/21/11521620306787-HIGHLANDER-Men-Shirts-8701521620306623-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'white',
    discountDisplayLabel: '(45% OFF)',
    category: 'Shirts',
    mrp: 1998,
    price: 1098
  },
  {
    productId: 6626369,
    product: 'Dennis Lingo Men Black Slim Fit Solid Casual Shirt',
    discount: 1295,
    brand: 'Dennis Lingo',
    img:
      'http://assets.myntassets.com/assets/images/6626369/2018/6/5/df5a11d7-c2f2-4e35-8f18-ae400937f0051528192374029-Dennis-Lingo-Men-Black-Slim-Fit-Solid-Casual-Shirt-1171528192373773-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'black',
    discountDisplayLabel: '(70% OFF)',
    category: 'Shirts',
    mrp: 1849,
    price: 554
  },
  {
    productId: 4426369,
    product: 'WROGN Men Black Solid Casual Shirt',
    discount: 1295,
    brand: 'Wrogn',
    img:
      'http://assets.myntassets.com/assets/images/6626369/2018/6/5/df5a11d7-c2f2-4e35-8f18-ae400937f0051528192374029-Dennis-Lingo-Men-Black-Slim-Fit-Solid-Casual-Shirt-1171528192373773-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'black',
    discountDisplayLabel: '(70% OFF)',
    category: 'Shirts',
    mrp: 1849,
    price: 554
  },
  {
    productId: 7253523,
    product: 'Flying Machine Men Blue Original Regular Fit Solid Casual Shirt',
    discount: 0,
    brand: 'Flying Machine',
    img:
      'http://assets.myntassets.com/assets/images/7253523/2018/9/15/e60c059c-1025-4ab7-82dd-2942cc1321f91537005144599-Flying-Machine-Men-Blue-Original-Regular-Fit-Solid-Casual-Sh-1.jpg',

    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'blue',
    category: 'Shirts',
    mrp: 1599,
    price: 1599
  },
  {
    productId: 2206854,
    product: 'WROGN Men Red & Navy Blue Slim Fit Checked Casual Shirt',
    discount: 0,
    brand: 'Wrogn',
    img:
      'http://assets.myntassets.com/assets/images/6832572/2018/8/24/434ae3a1-c156-4b9d-862e-be38775972771535109119418-WROGN-Men-Red--Navy-Blue-Slim-Fit-Checked-Casual-Shirt-3891535109119109-1.jpg',

    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'red',
    category: 'Shirts',
    mrp: 2199,
    price: 2199
  },
  {
    productId: 2204854,
    product: 'HIGHLANDER Men Red & Navy Blue Checked Casual Shirt',
    discount: 0,
    brand: 'Highlander',
    img:
      'http://assets.myntassets.com/assets/images/6832572/2018/8/24/434ae3a1-c156-4b9d-862e-be38775972771535109119418-WROGN-Men-Red--Navy-Blue-Slim-Fit-Checked-Casual-Shirt-3891535109119109-1.jpg',

    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'red',
    category: 'Shirts',
    mrp: 1899,
    price: 1899
  },
  {
    productId: 2006854,
    product: 'HIGHLANDER Men Red & Blue Slim Fit Checked Casual Shirt',
    discount: 500,
    brand: 'Highlander',
    img:
      'http://assets.myntassets.com/assets/images/2006854/2018/8/6/461a3f13-d2eb-47c7-a0f2-b31d340776fd1533539805579-HIGHLANDER-Men-Red--Blue-Slim-Fit-Checked-Casual-Shirt-86515-1.jpg',

    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'red',
    discountDisplayLabel: '(50% OFF)',
    category: 'Shirts',
    mrp: 999,
    price: 499
  },
  {
    productId: 2220378,
    product:
      'Roadster Men Red & Navy Blue Regular Fit Reversible Checked Casual Shirt',
    discount: 0,
    brand: 'Roadster',
    img:
      'http://assets.myntassets.com/assets/images/2006854/2018/8/6/461a3f13-d2eb-47c7-a0f2-b31d340776fd1533539805579-HIGHLANDER-Men-Red--Blue-Slim-Fit-Checked-Casual-Shirt-86515-1.jpg',

    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'red',
    category: 'Shirts',
    mrp: 1299,
    price: 1299
  },
  {
    productId: 2047727,
    product: 'INVICTUS Men White & Red Slim Fit Checked Casual Shirt',
    discount: 540,
    brand: 'Invictus',
    img:
      'http://assets.myntassets.com/assets/images/2047727/2017/9/28/11506597681353-INVICTUS-Men-White--Red-Slim-Fit-Checked-Casual-Shirt-5291506597681146-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'red',
    discountDisplayLabel: '(50% OFF)',
    category: 'Shirts',
    mrp: 999,
    price: 499
  },
  {
    productId: 7226443,
    product: "GAP Men's Pattern Poplin Shirt in Stretch",
    discount: 0,
    brand: 'GAP',
    img:
      'http://assets.myntassets.com/assets/images/7226443/2018/9/18/5b9d8c20-0d49-4e57-ad4c-adece9b8fd421537270685773-GAP-Men-Blue--Black-Poplin-Plaid-Shirt-in-Stretch-7201537270-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'blue',
    category: 'Shirts',
    mrp: 2499,
    price: 2499
  },
  {
    productId: 6426413,
    product: "INVICTUS Men's Pattern  Shirt in Stretch",
    discount: 0,
    brand: 'Invictus',
    img:
      'http://assets.myntassets.com/assets/images/7226443/2018/9/18/5b9d8c20-0d49-4e57-ad4c-adece9b8fd421537270685773-GAP-Men-Blue--Black-Poplin-Plaid-Shirt-in-Stretch-7201537270-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'blue',
    category: 'Shirts',
    mrp: 1799,
    price: 1799
  },
  {
    productId: 1272486,
    product: 'Highlander Blue Washed Slim Fit Denim Shirt',
    discount: 250,
    brand: 'Highlander',
    img:
      'http://assets.myntassets.com/assets/images/1272486/2018/4/3/11522754005793-Highlander-Blue-Washed-Slim-Denim-Shirt-9021522754005587-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'blue',
    discountDisplayLabel: '(25% OFF)',
    category: 'Shirts',
    mrp: 999,
    price: 749
  },
  {
    productId: 3272486,
    product: 'Flying Machine Blue  Slim Fit Denim Shirt',
    discount: 500,
    brand: 'Flying Machine',
    img:
      'http://assets.myntassets.com/assets/images/1272486/2018/4/3/11522754005793-Highlander-Blue-Washed-Slim-Denim-Shirt-9021522754005587-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'blue',
    discountDisplayLabel: '(50% OFF)',
    category: 'Shirts',
    mrp: 999,
    price: 499
  },
  {
    productId: 7179152,
    product: 'Flying Machine Men Red & Black Regular Fit Checked Casual Shirt',
    discount: 0,
    brand: 'Flying Machine',
    img:
      'http://assets.myntassets.com/assets/images/7179152/2018/9/10/23019e01-8291-4f32-952c-ab6ec1cbab8a1536567328887-Flying-Machine-Men-Red--Black-Regular-Fit-Checked-Casual-Shi-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'red',
    category: 'Shirts',
    mrp: 1599,
    price: 1599
  },
  {
    productId: 4179152,
    product: 'Dennis Lingo Men Red & Black Regular Fit Checked Casual Shirt',
    discount: 0,
    brand: 'Dennis Lingo',
    img:
      'http://assets.myntassets.com/assets/images/7179152/2018/9/10/23019e01-8291-4f32-952c-ab6ec1cbab8a1536567328887-Flying-Machine-Men-Red--Black-Regular-Fit-Checked-Casual-Shi-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'red',
    category: 'Shirts',
    mrp: 699,
    price: 699
  },
  {
    productId: 1265388,
    product: 'Highlander Maroon Slim Fit Casual Shirt',
    discount: 400,
    brand: 'Highlander',
    img:
      'http://assets.myntassets.com/assets/images/7179152/2018/9/10/23019e01-8291-4f32-952c-ab6ec1cbab8a1536567328887-Flying-Machine-Men-Red--Black-Regular-Fit-Checked-Casual-Shi-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    discountDisplayLabel: '(40% OFF)',
    primaryColor: 'maroon',
    category: 'Shirts',
    mrp: 999,
    price: 599
  },
  {
    productId: 5227876,
    product: 'Highlander Men Black Regular Fit Solid Casual Shirt',
    discount: 0,
    brand: 'Highlander',
    img:
      'http://assets.myntassets.com/assets/images/2127876/2017/11/23/11511431472633-Roadster-Men-Black-Regular-Fit-Solid-Casual-Shirt-8801511431472500-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'black',
    category: 'Shirts',
    mrp: 1299,
    price: 1299
  },
  {
    productId: 1276577,
    product: 'Flying Machine Men Black & Grey Checked Casual Shirt',
    discount: 0,
    brand: 'Flying Machine',
    img:
      'http://assets.myntassets.com/assets/images/1376577/2016/9/15/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'black',
    category: 'Shirts',
    mrp: 1299,
    price: 1299
  },
  {
    productId: 2376577,
    product: 'Roadster Men Black & Grey Checked Casual Shirt',
    discount: 0,
    brand: 'Roadster',
    img:
      'http://assets.myntassets.com/assets/images/1376577/2016/9/15/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'black',
    category: 'Shirts',
    mrp: 1299,
    price: 1299
  },
  {
    productId: 1879348,
    product: 'HIGHLANDER Men White Slim Fit Printed Casual Shirt',
    discount: 350,
    brand: 'Highlander',
    img:
      'http://assets.myntassets.com/assets/images/1979348/2017/12/5/11512457137542-HIGHLANDER-Men-White-Slim-Fit-Printed-Casual-Shirt-3001512457137360-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'white',
    category: 'Shirts',
    mrp: 999,
    price: 649
  },
  {
    productId: 9932736,
    product: 'WROGN Men Maroon Slim Fit Checked Casual Shirt',
    discount: 660,
    brand: 'Wrogn',
    img:
      'http://assets.myntassets.com/assets/images/6832736/2018/8/17/38d8e96d-c3ec-4e21-993a-49320069aef41534510489983-WROGN-Men-Maroon-Slim-Fit-Checked-Casual-Shirt-7381534510486-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'maroon',
    category: 'Shirts',
    mrp: 2199,
    price: 1539
  },
  {
    productId: 1864501,
    product: 'Roadster Men Maroon & Navy Blue Regular Fit Checked Casual Shirt',
    discount: 260,
    brand: 'Roadster',
    img:
      'http://assets.myntassets.com/assets/images/1862801/2018/2/9/11518155061506-Roadster-Men-Maroon--Navy-Blue-Regular-Fit-Checked-Casual-Shirt-8861518155061131-1.jpg',
    sizes: '38,40',
    gender: 'Male',
    primaryColor: 'maroon',
    category: 'Shirts',
    mrp: 1299,
    price: 1039
  },
  {
    productId: 5226290,
    product: "GAP Men's Blue & Burgundy Pattern Oxford Shirt in Stretch",
    discount: 0,
    brand: 'GAP',
    img:
      'http://assets.myntassets.com/assets/images/7226490/2018/9/18/dafd24f0-d9e2-4c70-ae2c-940d75958b071537272085177-GAP-Mens-Blue--Burgundy-Pattern-Oxford-Shirt-in-Stretch-8981-1.jpg',
    sizes: '38,40',
    gender: 'Male',
    primaryColor: 'blue',
    category: 'Shirts',
    mrp: 2499,
    price: 2499
  },
  {
    productId: 2122376,
    product: 'Roadster Men Black Regular Fit Solid Casual Shirt',
    discount: 0,
    brand: 'Roadster',
    img:
      'http://assets.myntassets.com/assets/images/2127876/2017/11/23/11511431472633-Roadster-Men-Black-Regular-Fit-Solid-Casual-Shirt-8801511431472500-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'black',
    category: 'Shirts',
    mrp: 999,
    price: 999
  },
  {
    productId: 1266584,
    product: 'Highlander White Solid Slim Fit Casual Shirt',
    discount: 400,
    brand: 'Highlander',
    img:
      'http://assets.myntassets.com/assets/images/1265384/2018/2/7/11517995803839-Highlander-White-Slim-Fit-Casual-Shirt-7581517995803601-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'white',
    category: 'Shirts',
    mrp: 999,
    price: 599
  },
  {
    productId: 4317704,
    product: 'HIGHLANDER Men Pack Of 2 Solid Shirts',
    discount: 900,
    brand: 'Highlander',
    img:
      'http://assets.myntassets.com/assets/images/4319204/2018/3/21/11521620306787-HIGHLANDER-Men-Shirts-8701521620306623-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'white',
    discountDisplayLabel: '(45% OFF)',
    category: 'Shirts',
    mrp: 1998,
    price: 1098
  },
  {
    productId: 6629969,
    product: 'Dennis Lingo Men Black Slim Fit Solid Casual Shirt',
    discount: 1295,
    brand: 'Dennis Lingo',
    img:
      'http://assets.myntassets.com/assets/images/6626369/2018/6/5/df5a11d7-c2f2-4e35-8f18-ae400937f0051528192374029-Dennis-Lingo-Men-Black-Slim-Fit-Solid-Casual-Shirt-1171528192373773-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'black',
    discountDisplayLabel: '(70% OFF)',
    category: 'Shirts',
    mrp: 1849,
    price: 554
  },
  {
    productId: 4423469,
    product: 'WROGN Men Black Solid Casual Shirt',
    discount: 1295,
    brand: 'Wrogn',
    img:
      'http://assets.myntassets.com/assets/images/6626369/2018/6/5/df5a11d7-c2f2-4e35-8f18-ae400937f0051528192374029-Dennis-Lingo-Men-Black-Slim-Fit-Solid-Casual-Shirt-1171528192373773-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'black',
    discountDisplayLabel: '(70% OFF)',
    category: 'Shirts',
    mrp: 1849,
    price: 554
  },
  {
    productId: 3453523,
    product: 'Flying Machine Men Blue Original Regular Fit Solid Casual Shirt',
    discount: 0,
    brand: 'Flying Machine',
    img:
      'http://assets.myntassets.com/assets/images/7253523/2018/9/15/e60c059c-1025-4ab7-82dd-2942cc1321f91537005144599-Flying-Machine-Men-Blue-Original-Regular-Fit-Solid-Casual-Sh-1.jpg',

    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'blue',
    category: 'Shirts',
    mrp: 1599,
    price: 1599
  },
  {
    productId: 9006854,
    product: 'WROGN Men Red & Navy Blue Slim Fit Checked Casual Shirt',
    discount: 0,
    brand: 'Wrogn',
    img:
      'http://assets.myntassets.com/assets/images/6832572/2018/8/24/434ae3a1-c156-4b9d-862e-be38775972771535109119418-WROGN-Men-Red--Navy-Blue-Slim-Fit-Checked-Casual-Shirt-3891535109119109-1.jpg',

    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'red',
    category: 'Shirts',
    mrp: 2199,
    price: 2199
  },
  {
    productId: 3204854,
    product: 'HIGHLANDER Men Red & Navy Blue Checked Casual Shirt',
    discount: 0,
    brand: 'Highlander',
    img:
      'http://assets.myntassets.com/assets/images/6832572/2018/8/24/434ae3a1-c156-4b9d-862e-be38775972771535109119418-WROGN-Men-Red--Navy-Blue-Slim-Fit-Checked-Casual-Shirt-3891535109119109-1.jpg',

    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'red',
    category: 'Shirts',
    mrp: 1899,
    price: 1899
  },
  {
    productId: 3206854,
    product: 'HIGHLANDER Men Red & Blue Slim Fit Checked Casual Shirt',
    discount: 500,
    brand: 'Highlander',
    img:
      'http://assets.myntassets.com/assets/images/2006854/2018/8/6/461a3f13-d2eb-47c7-a0f2-b31d340776fd1533539805579-HIGHLANDER-Men-Red--Blue-Slim-Fit-Checked-Casual-Shirt-86515-1.jpg',

    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'red',
    discountDisplayLabel: '(50% OFF)',
    category: 'Shirts',
    mrp: 999,
    price: 499
  },
  {
    productId: 8720378,
    product:
      'Roadster Men Red & Navy Blue Regular Fit Reversible Checked Casual Shirt',
    discount: 0,
    brand: 'Roadster',
    img:
      'http://assets.myntassets.com/assets/images/2006854/2018/8/6/461a3f13-d2eb-47c7-a0f2-b31d340776fd1533539805579-HIGHLANDER-Men-Red--Blue-Slim-Fit-Checked-Casual-Shirt-86515-1.jpg',

    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'red',
    category: 'Shirts',
    mrp: 1299,
    price: 1299
  },
  {
    productId: 2011727,
    product: 'INVICTUS Men White & Red Slim Fit Checked Casual Shirt',
    discount: 540,
    brand: 'Invictus',
    img:
      'http://assets.myntassets.com/assets/images/2047727/2017/9/28/11506597681353-INVICTUS-Men-White--Red-Slim-Fit-Checked-Casual-Shirt-5291506597681146-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'red',
    discountDisplayLabel: '(50% OFF)',
    category: 'Shirts',
    mrp: 999,
    price: 499
  },
  {
    productId: 7211443,
    product: "GAP Men's Pattern Poplin Shirt in Stretch",
    discount: 0,
    brand: 'GAP',
    img:
      'http://assets.myntassets.com/assets/images/7226443/2018/9/18/5b9d8c20-0d49-4e57-ad4c-adece9b8fd421537270685773-GAP-Men-Blue--Black-Poplin-Plaid-Shirt-in-Stretch-7201537270-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'blue',
    category: 'Shirts',
    mrp: 2499,
    price: 2499
  },
  {
    productId: 6488413,
    product: "INVICTUS Men's Pattern  Shirt in Stretch",
    discount: 0,
    brand: 'Invictus',
    img:
      'http://assets.myntassets.com/assets/images/7226443/2018/9/18/5b9d8c20-0d49-4e57-ad4c-adece9b8fd421537270685773-GAP-Men-Blue--Black-Poplin-Plaid-Shirt-in-Stretch-7201537270-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'blue',
    category: 'Shirts',
    mrp: 1799,
    price: 1799
  },
  {
    productId: 8872486,
    product: 'Highlander Blue Washed Slim Fit Denim Shirt',
    discount: 250,
    brand: 'Highlander',
    img:
      'http://assets.myntassets.com/assets/images/1272486/2018/4/3/11522754005793-Highlander-Blue-Washed-Slim-Denim-Shirt-9021522754005587-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'blue',
    discountDisplayLabel: '(25% OFF)',
    category: 'Shirts',
    mrp: 999,
    price: 749
  },
  {
    productId: 5472486,
    product: 'Flying Machine Blue  Slim Fit Denim Shirt',
    discount: 500,
    brand: 'Flying Machine',
    img:
      'http://assets.myntassets.com/assets/images/1272486/2018/4/3/11522754005793-Highlander-Blue-Washed-Slim-Denim-Shirt-9021522754005587-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'blue',
    discountDisplayLabel: '(50% OFF)',
    category: 'Shirts',
    mrp: 999,
    price: 499
  },
  {
    productId: 3479152,
    product: 'Flying Machine Men Red & Black Regular Fit Checked Casual Shirt',
    discount: 0,
    brand: 'Flying Machine',
    img:
      'http://assets.myntassets.com/assets/images/7179152/2018/9/10/23019e01-8291-4f32-952c-ab6ec1cbab8a1536567328887-Flying-Machine-Men-Red--Black-Regular-Fit-Checked-Casual-Shi-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'red',
    category: 'Shirts',
    mrp: 1599,
    price: 1599
  },
  {
    productId: 4379152,
    product: 'Dennis Lingo Men Red & Black Regular Fit Checked Casual Shirt',
    discount: 0,
    brand: 'Dennis Lingo',
    img:
      'http://assets.myntassets.com/assets/images/7179152/2018/9/10/23019e01-8291-4f32-952c-ab6ec1cbab8a1536567328887-Flying-Machine-Men-Red--Black-Regular-Fit-Checked-Casual-Shi-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'red',
    category: 'Shirts',
    mrp: 699,
    price: 699
  },
  {
    productId: 7565388,
    product: 'Highlander Maroon Slim Fit Casual Shirt',
    discount: 400,
    brand: 'Highlander',
    img:
      'http://assets.myntassets.com/assets/images/7179152/2018/9/10/23019e01-8291-4f32-952c-ab6ec1cbab8a1536567328887-Flying-Machine-Men-Red--Black-Regular-Fit-Checked-Casual-Shi-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    discountDisplayLabel: '(40% OFF)',
    primaryColor: 'maroon',
    category: 'Shirts',
    mrp: 999,
    price: 599
  },
  {
    productId: 3227876,
    product: 'Highlander Men Black Regular Fit Solid Casual Shirt',
    discount: 0,
    brand: 'Highlander',
    img:
      'http://assets.myntassets.com/assets/images/2127876/2017/11/23/11511431472633-Roadster-Men-Black-Regular-Fit-Solid-Casual-Shirt-8801511431472500-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'black',
    category: 'Shirts',
    mrp: 1299,
    price: 1299
  },
  {
    productId: 13276577,
    product: 'Flying Machine Men Black & Grey Checked Casual Shirt',
    discount: 0,
    brand: 'Flying Machine',
    img:
      'http://assets.myntassets.com/assets/images/1376577/2016/9/15/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'black',
    category: 'Shirts',
    mrp: 1299,
    price: 1299
  },
  {
    productId: 2011457,
    product: 'INVICTUS Men White & Red Slim Fit Checked Casual Shirt',
    discount: 540,
    brand: 'Invictus',
    img:
      'http://assets.myntassets.com/assets/images/2047727/2017/9/28/11506597681353-INVICTUS-Men-White--Red-Slim-Fit-Checked-Casual-Shirt-5291506597681146-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'red',
    discountDisplayLabel: '(50% OFF)',
    category: 'Shirts',
    mrp: 999,
    price: 499
  },
  {
    productId: 7211333,
    product: "GAP Men's Pattern Poplin Shirt in Stretch",
    discount: 0,
    brand: 'GAP',
    img:
      'http://assets.myntassets.com/assets/images/7226443/2018/9/18/5b9d8c20-0d49-4e57-ad4c-adece9b8fd421537270685773-GAP-Men-Blue--Black-Poplin-Plaid-Shirt-in-Stretch-7201537270-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'blue',
    category: 'Shirts',
    mrp: 2499,
    price: 2499
  },
  {
    productId: 7488413,
    product: "INVICTUS Men's Pattern  Shirt in Stretch",
    discount: 0,
    brand: 'Invictus',
    img:
      'http://assets.myntassets.com/assets/images/7226443/2018/9/18/5b9d8c20-0d49-4e57-ad4c-adece9b8fd421537270685773-GAP-Men-Blue--Black-Poplin-Plaid-Shirt-in-Stretch-7201537270-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'blue',
    category: 'Shirts',
    mrp: 1799,
    price: 1799
  },
  {
    productId: 2272486,
    product: 'Highlander Blue Washed Slim Fit Denim Shirt',
    discount: 250,
    brand: 'Highlander',
    img:
      'http://assets.myntassets.com/assets/images/1272486/2018/4/3/11522754005793-Highlander-Blue-Washed-Slim-Denim-Shirt-9021522754005587-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'blue',
    discountDisplayLabel: '(25% OFF)',
    category: 'Shirts',
    mrp: 999,
    price: 749
  },
  {
    productId: 5222486,
    product: 'Flying Machine Blue  Slim Fit Denim Shirt',
    discount: 500,
    brand: 'Flying Machine',
    img:
      'http://assets.myntassets.com/assets/images/1272486/2018/4/3/11522754005793-Highlander-Blue-Washed-Slim-Denim-Shirt-9021522754005587-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'blue',
    discountDisplayLabel: '(50% OFF)',
    category: 'Shirts',
    mrp: 999,
    price: 499
  },
  {
    productId: 3989152,
    product: 'Flying Machine Men Red & Black Regular Fit Checked Casual Shirt',
    discount: 0,
    brand: 'Flying Machine',
    img:
      'http://assets.myntassets.com/assets/images/7179152/2018/9/10/23019e01-8291-4f32-952c-ab6ec1cbab8a1536567328887-Flying-Machine-Men-Red--Black-Regular-Fit-Checked-Casual-Shi-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'red',
    category: 'Shirts',
    mrp: 1599,
    price: 1599
  },
  {
    productId: 4389152,
    product: 'Dennis Lingo Men Red & Black Regular Fit Checked Casual Shirt',
    discount: 0,
    brand: 'Dennis Lingo',
    img:
      'http://assets.myntassets.com/assets/images/7179152/2018/9/10/23019e01-8291-4f32-952c-ab6ec1cbab8a1536567328887-Flying-Machine-Men-Red--Black-Regular-Fit-Checked-Casual-Shi-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'red',
    category: 'Shirts',
    mrp: 699,
    price: 699
  },
  {
    productId: 7568388,
    product: 'Highlander Maroon Slim Fit Casual Shirt',
    discount: 400,
    brand: 'Highlander',
    img:
      'http://assets.myntassets.com/assets/images/7179152/2018/9/10/23019e01-8291-4f32-952c-ab6ec1cbab8a1536567328887-Flying-Machine-Men-Red--Black-Regular-Fit-Checked-Casual-Shi-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    discountDisplayLabel: '(40% OFF)',
    primaryColor: 'maroon',
    category: 'Shirts',
    mrp: 999,
    price: 599
  },
  {
    productId: 3237876,
    product: 'Highlander Men Black Regular Fit Solid Casual Shirt',
    discount: 0,
    brand: 'Highlander',
    img:
      'http://assets.myntassets.com/assets/images/2127876/2017/11/23/11511431472633-Roadster-Men-Black-Regular-Fit-Solid-Casual-Shirt-8801511431472500-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'black',
    category: 'Shirts',
    mrp: 1299,
    price: 1299
  },
  {
    productId: 1226577,
    product: 'Flying Machine Men Black & Grey Checked Casual Shirt',
    discount: 0,
    brand: 'Flying Machine',
    img:
      'http://assets.myntassets.com/assets/images/1376577/2016/9/15/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg',
    sizes: '38,40,42,44',
    gender: 'Male',
    primaryColor: 'black',
    category: 'Shirts',
    mrp: 1299,
    price: 1299
  }
];

module.exports = { dummyData };
