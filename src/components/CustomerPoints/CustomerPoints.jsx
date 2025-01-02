import React from 'react';

/**
 * Displays customer reward points.
 * @param {Object} data - Reward data for each customer.
 */
const CustomerPoints = ({ data }) => {
    return (
        <div>
            <h2>Customer Rewards</h2>
            {Object.entries(data).map(([customerId, { total, monthly }]) => (
                <div key={customerId}>
                    <h3>Customer ID: {customerId}</h3>
                    <p>Total Points: {total}</p>
                    <ul>
                        {Object.entries(monthly).map(([month, points]) => (
                            <li key={month}>{month}: {points} points</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default CustomerPoints;
