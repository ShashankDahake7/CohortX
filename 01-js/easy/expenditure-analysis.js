/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};
  for (let i = 0; i < transactions.length; i++) {
    const { category, price } = transactions[i];
    if (!categoryTotals[category]) {
      categoryTotals[category] = price;
    } 
    else {
      categoryTotals[category] += price;
    }
  }
  const result = [];
  const categories = Object.keys(categoryTotals);
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    result.push({
      category,
      totalSpent: categoryTotals[category],
    });
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;