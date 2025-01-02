export const calculateRewards = (transactions) => {
    const rewards = {};

    transactions.forEach(({ customerId, date, amount }) => {
        const month = new Date(date).toLocaleString('default', { month: 'long' });
        if (!rewards[customerId]) rewards[customerId] = { total: 0, monthly: {} };

        const points =
            (amount > 100 ? (amount - 100) * 2 : 0) +
            (amount > 50 ? Math.min(amount, 100) - 50 : 0);

        rewards[customerId].total += points;
        rewards[customerId].monthly[month] = (rewards[customerId].monthly[month] || 0) + points;
    });

    return rewards;
};
