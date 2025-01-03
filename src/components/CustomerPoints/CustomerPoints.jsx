import React from 'react';

/**
 * CustomerPoints Component
 * Displays rewards information for customers.
 * 
 * @param {Object} data - The rewards data structured by customer IDs.
 * @returns {JSX.Element} A component rendering customer rewards details or a fallback message.
 */
const CustomerPoints = ({ data }) => {
    // Check if data has any content
    const hasData = Object.keys(data).length > 0;

    return (
        <div>
            <h2>Customer Rewards</h2>
            {hasData ? (
                // Iterate over each customer ID in the data
                Object.entries(data).map(([customerId, { total, monthly }]) => (
                    <div key={customerId}>
                        <h3>Customer ID: {customerId}</h3>
                        <p>Total Points: {total}</p>
                        <ul>
                        {/* monthly points for each customer */}
                            {Object.entries(monthly).map(([month, points]) => (
                                <li key={month}>
                                    {month}: {points} points
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                //  When no data is available
                <p>No data available</p>
            )}
        </div>
    );
};

export default CustomerPoints;
