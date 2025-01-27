import {render, screen, waitFor} from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

it('should shows 6 products by default', async () => {
    render (<App />);

    const titles = await screen.findAllByRole('heading');
    expect(titles).toHaveLength(6);
});

it('should show 6 more products when button is clicked', async () => {
    render (<App />);

    const button = await screen.findByRole('button', {name: /Load more/i});
    user.click(button);

    await waitFor(async () => {
    const titles = await screen.findAllByRole('heading');
    expect(titles).toHaveLength(12);
    })
});