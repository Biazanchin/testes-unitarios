import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm'

describe("<UseForm", () => {
    it('should shows two inputs and a button', () => {
        render (<UserForm/>);
    
        const inputs = screen.getAllByRole('textbox');
        const button = screen.getByRole('button');
    
        expect(inputs).toHaveLength(2);
        expect(button).toBeVisible();
    });
    
    it('should calls onUserAdd when the form is submitted', async () => {
        const mockFunction = jest.fn()
    
        //const argList = []
        //const callback = (...args) => {
        //    argList.push(args)
        //}
    
        render(<UserForm onUserAdd={mockFunction}/>)
    
        //const [nameInput, emailInput] = screen.getAllByRole('textbox')
        const nameInput = screen.getByRole('textbox', {
            name: /name/i
        });
        const emailInput = screen.getByRole('textbox', {
            name: /email/i
        });
    
        await user.click(nameInput)
        await user.keyboard('Beatriz')
    
        await user.click(emailInput)
        await user.keyboard('beatrizzanchinm@gmail.com')
    
        const button = screen.getByRole('button')
    
        await user.click(button)
    
        //expect(argList).toHaveLength(1)
        //expect(argList[0][0]).toEqual({name: 'Beatriz',  email: 'beatrizzanchinm@gmail.com'})
    
        expect(mockFunction).toHaveBeenCalled();
        expect(mockFunction).toHaveBeenCalledWith({name: 'Beatriz', email: 'beatrizzanchinm@gmail.com'})
    });
    
    it('should clear the two inputs when form is submitted', async () => {
        render(<UserForm onUserAdd={() => {}}/>)
    
        const nameInput = screen.getByRole('textbox', {
            name: /name/i
        });
        const emailInput = screen.getByRole('textbox', {
            name: /email/i
        });
    
        await user.click(nameInput)
        await user.keyboard('Beatriz')
    
        await user.click(emailInput)
        await user.keyboard('beatrizzanchinm@gmail.com')
    
        const button = screen.getByRole('button')
    
        await user.click(button)
    
        expect(nameInput).toHaveValue('')
        expect(emailInput).toHaveValue('')
    });
});