import React, { useEffect, useState, useCallback } from 'react';
import { fetchTransactions } from './services/api';
import { calculateRewards } from './utils/rewardCalculator';
import CustomerPoints from './components/CustomerPoints/CustomerPoints';

const App = () => {
    const [transactions, setTransactions] = useState([]);
    const [rewards, setRewards] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadTransactions = useCallback(async () => {
        try {
            const data = await fetchTransactions();
            setTransactions(data);
            const rewardsData = calculateRewards(data);
            setRewards(rewardsData);
        } catch (err) {
            setError('Failed to fetch transactions');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadTransactions();
    }, [loadTransactions]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Rewards Program</h1>
            {rewards && <CustomerPoints data={rewards} />}
        </div>
    );
};

export default App;
