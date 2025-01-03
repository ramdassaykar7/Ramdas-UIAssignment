import React, { useEffect, useState, useCallback } from 'react';
import { fetchTransactions } from './services/api';
import { calculateRewards } from './utils/rewardCalculator';
import CustomerPoints from './components/CustomerPoints/CustomerPoints';

/**
 * Main application component that fetches transaction data,
 * calculates rewards, and displays customer points.
 */
const App = () => {
    const [transactions, setTransactions] = useState([]);
    const [rewards, setRewards] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    /**
     * Fetches transactions and calculates rewards when component mounts.
     */
    const loadTransactions = useCallback(async () => {
        try {
            const data = await fetchTransactions();
            setTransactions(data);  // Store transactions in state
            const rewardsData = calculateRewards(data);  // Calculate rewards based on fetched data
            setRewards(rewardsData);  // Update state with calculated reward points
        } catch (err) {
            // Handle error if API call fails
            setError('Failed to fetch transactions');
        } finally {
            setLoading(false);  // Stop loading once data is fetched
        }
    }, []);

    // Run loadtransaction when the component mounts
    useEffect(() => {
        loadTransactions();
    }, [loadTransactions]);

    // Show loading or error messages if applicable
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    // Render CustomerPoints component if rewards data is available
    return (
        <div>
            <h1>Rewards Program</h1>
            {rewards && <CustomerPoints data={rewards} />}
        </div>
    );
};

export default App;
