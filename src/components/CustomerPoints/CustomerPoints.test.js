import { calculateRewards } from '../../utils/rewardCalculator';

test('Calculates rewards correctly', () => {
    const transactions = [
        { customerId: 1, date: '2024-01-10', amount: 120 },
        { customerId: 1, date: '2024-02-14', amount: 75 },
    ];
    const rewards = calculateRewards(transactions);
    expect(rewards[1].total).toBe(90);  // 70 + 20
    expect(rewards[1].monthly['January']).toBe(90);
});
