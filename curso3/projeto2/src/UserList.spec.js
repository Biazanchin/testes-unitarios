import {render, screen} from '@testing-library/react'
import UserList from './UserList'

function renderComponent() {
    const users = [
        {name: 'Beatriz', email: 'beatrizzanchinm@gmail.com'},
        {name: 'Lucas', email: 'lucas.hen.lps@gmail.com'},
    ];
    const {container} = render(<UserList users={users}/>);

    return {
        container,
        users,
    };
};

describe("<UserList/>", () => {
    it('should render one row per user', () => {
        const {container} = renderComponent();
    
        // eslint-disable-next-line
        const rows = container.querySelectorAll('tbody tr')
        
        expect(rows).toHaveLength(2)
    
    });
    
    it('should render the email and name of each user', () => {
        const { users } = renderComponent()
    
        for (let user of users) {
            const name = screen.getByRole('cell', {name: user.name})
            const email = screen.getByRole('cell', {name: user.email})
    
            expect(name).toBeVisible()
            expect(email).toBeVisible()
        }
    
    });
});
