const maxProfit = (prices) => {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    const profit = price - minPrice;

    if (profit > maxProfit) {
      maxProfit = profit;
    }

    if (price < minPrice) {
      minPrice = price;
    }
  }

  return maxProfit;
};

// const maxProfit = (prices) => {
//   let profit = 0;
//
//   for (let i = 0; i < prices.length; i++) {
//     const price = prices[i];
//
//     for (let j = i + 1; j < prices.length; j++) {
//       const nextPrice = prices[j];
//       const value = nextPrice - price;
//
//       if (value > profit) {
//         profit = value;
//       }
//     }
//   }
//
//   return profit;
// };

// maxProfit([7, 1, 5, 3, 6, 4]); // 5 (2 buy, 5 sell)
// maxProfit([7, 6, 4, 3, 1]); // 0 (5 buy, 0 sell)
// maxProfit([2, 1, 2, 0, 1]); // 2 (2 buy, 4 sell)
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 2 (2 buy, 4 sell) 6
// console.log(maxProfit([2, 1, 2, 1, 0, 1, 2])); // 2 (2 buy, 4 sell)
module.exports = maxProfit;
