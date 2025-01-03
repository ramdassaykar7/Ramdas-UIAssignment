export const fetchTransactions = () => {
    return new Promise((resolve) => {
        const data = [
            // January Transactions
            { customerId: 1, date: '2024-01-10', amount: 120 },
            { customerId: 2, date: '2024-01-15', amount: 80 },
            { customerId: 3, date: '2024-01-20', amount: 45 },

            // February Transactions
            { customerId: 1, date: '2024-02-05', amount: 200 },
            { customerId: 2, date: '2024-02-10', amount: 95 },
            { customerId: 3, date: '2024-02-25', amount: 150 },

            // March Transactions
            { customerId: 1, date: '2024-03-12', amount: 75 },
            { customerId: 2, date: '2024-03-18', amount: 55 },
            { customerId: 3, date: '2024-03-22', amount: 100 },
        ];
        setTimeout(() => resolve(data), 1000);
    });
};
