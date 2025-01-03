/**
 * Calculate reward points based on transaction amount.
 * @param {Array} transactions - List of customer transactions.
 * @returns {Object} - Rewards by customer, month, and total.
 */

export const calculateRewards = (transactions) => {

    // Store rewards for each customer
  const rewards = {};

  transactions.forEach(({ customerId, date, amount }) => {

     // Check which month the transaction belongs to
    const month = new Date(date).toLocaleString("default", { month: "long" });

    // Initialise customer records if not present
    if (!rewards[customerId]) rewards[customerId] = { total: 0, monthly: {} };

    //calculate reward points
    const points =
      (amount > 100 ? (amount - 100) * 2 : 0) +
      (amount > 50 ? Math.min(amount, 100) - 50 : 0);

    //Update total and monthly points
    rewards[customerId].total += points;
    rewards[customerId].monthly[month] =
      (rewards[customerId].monthly[month] || 0) + points;
  });

  return rewards;
};
