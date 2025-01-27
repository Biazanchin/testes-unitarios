import {render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

describe("<App/>", () => {
    it('should receive a new user and show it on a list', async () => {
        render(<App/>);
    
        const nameInput = screen.getByRole('textbox', {
            name: /name/i
        });
        const emailInput = screen.getByRole('textbox', {
            name: /email/i
        });
        const button = screen.getByRole('button')
    
        await user.click(nameInput)
        await user.keyboard('Beatriz')
        await user.click(emailInput)
        await user.keyboard('beatrizzanchinm@gmail.com')
        await user.click(button)
    
        const name = screen.getByRole('cell', {name: 'Beatriz'})
        const email = screen.getByRole('cell', {name: 'beatrizzanchinm@gmail.com'})
    
        expect(name).toBeVisible()
        expect(email).toBeVisible()
    });
});