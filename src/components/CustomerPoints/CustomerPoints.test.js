import { render, screen } from '@testing-library/react';
import CustomerPoints from './CustomerPoints';
import '@testing-library/jest-dom';  // Ensure jest-dom matchers are available

const mockData = {
    1: { total: 150, monthly: { January: 90, February: 60 } },
    2: { total: 85, monthly: { January: 30, March: 55 } }
};

describe('CustomerPoints Component', () => {
    test('renders customer points correctly', () => {
        render(<CustomerPoints data={mockData} />);
        
        // Check for Customer 1 details
        expect(screen.getByText(/Customer ID: 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Total Points: 150/i)).toBeInTheDocument();
        expect(screen.getByText(/January: 90 points/i)).toBeInTheDocument();
        expect(screen.getByText(/February: 60 points/i)).toBeInTheDocument();

        // Check for Customer 2 details
        expect(screen.getByText(/Customer ID: 2/i)).toBeInTheDocument();
        expect(screen.getByText(/Total Points: 85/i)).toBeInTheDocument();
        expect(screen.getByText(/March: 55 points/i)).toBeInTheDocument();
    });

    test('renders empty state when no data is provided', () => {
        render(<CustomerPoints data={{}} />);

        expect(screen.getByText(/No data available/i)).toBeInTheDocument();
    });

    test('renders correctly with partial data', () => {
        const partialData = {
            3: { total: 45, monthly: { March: 45 } }
        };
        render(<CustomerPoints data={partialData} />);

        expect(screen.getByText(/Customer ID: 3/i)).toBeInTheDocument();
        expect(screen.getByText(/Total Points: 45/i)).toBeInTheDocument();
        expect(screen.getByText(/March: 45 points/i)).toBeInTheDocument();
    });

    test('matches snapshot', () => {
        const { asFragment } = render(<CustomerPoints data={mockData} />);
        expect(asFragment()).toMatchSnapshot();
    });

  
});
