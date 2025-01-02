export const fetchTransactions = () => {
    return new Promise((resolve) => {
        const data = [
            { customerId: 1, date: '2024-01-10', amount: 120 },
            { customerId: 1, date: '2024-02-14', amount: 75 },
            { customerId: 2, date: '2024-01-22', amount: 200 },
            { customerId: 3, date: '2024-03-05', amount: 50 },
        ];
        setTimeout(() => resolve(data), 1000);
    });
};
