import { calculateRewards } from './rewardCalculator';

describe('calculateRewards function', () => {
    test('calculates rewards correctly for different amounts', () => {
        const transactions = [
            { customerId: 1, date: '2024-01-10', amount: 120 },
            { customerId: 2, date: '2024-01-15', amount: 75 },
            { customerId: 3, date: '2024-01-20', amount: 45 }
        ];

        const rewards = calculateRewards(transactions);

        expect(rewards[1].total).toBe(90);  // $120 -> (20*2 + 50*1)
        expect(rewards[2].total).toBe(25);  // $75 -> (25*1)
        expect(rewards[3].total).toBe(0);   // $45 -> No points
    });

    test('calculates correctly for multiple months and customers', () => {
        const transactions = [
            { customerId: 1, date: '2024-01-10', amount: 120 },
            { customerId: 1, date: '2024-02-15', amount: 75 },
            { customerId: 2, date: '2024-03-20', amount: 200 }
        ];

        const rewards = calculateRewards(transactions);

        expect(rewards[1].monthly['January']).toBe(90);  // $120 in Jan
        expect(rewards[1].monthly['February']).toBe(25); // $75 in Feb
        expect(rewards[2].monthly['March']).toBe(250);   // $200 in Mar
    });
});
