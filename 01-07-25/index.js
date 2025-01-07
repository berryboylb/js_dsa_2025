/*
  PROBLEM

  You are given an array prices where prices[i] is the price of a given stock on the ith day.

  You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

   Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

/*
  Pseudocode

  1. if no price return zero

  2. initialize a min and profit

  3. loop through the prices, if the  current price is less tha the min, reassign the price to minimum

  4. if the price - min is greater than profit reassign
*/

export function solution(prices) {
  if (!prices.length) return 0;
  let min = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];
    else if (prices[i] - min > profit) profit = prices[i] - min;
  }
  console.log({ profit });
  return profit
}

export function main() {
  solution([7, 1, 5, 3, 6, 4]);
}
