import { fireEvent, render, waitFor } from '@testing-library/react-native';
import App from '../App';
import QuoteGenerator from '../src/components/QuoteGenerator';

test('fetches new quote when button is pressed', async () => {
    const { queryByText, getByText, getByTestId } = render(<QuoteGenerator />);
    
    expect(getByText('Error Fetching Quote')).toBeTruthy();

    fireEvent.press(getByTestId('button'));

    await waitFor(() => {
        expect(queryByText('Error Fetching Quote')).toBeNull();
    })
});