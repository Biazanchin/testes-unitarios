import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { createServer } from '../../test/server';
import AuthButtons from './AuthButtons';

async function renderComponent() {
  render(
    <SWRConfig value={{ provider: () => new Map() }}>
      <MemoryRouter>
        <AuthButtons />
      </MemoryRouter>
    </SWRConfig>
  );
  await screen.findAllByRole('link');
};

describe('<AuthButtons />', () => {
  describe('when user is signed in', () => {
    createServer([
      {
        path: '/api/user',
        res: () => {
          return { user: { id: 3, email: 'email@email.com' } };
        },
      },
    ]);
  
    it('should sign in and sign up are not visible', async () => {
      await renderComponent();
  
      const signInButton = screen.queryByRole('link', {
        name: /sign in/i,
      });
      const signUpButton = screen.queryByRole('link', {
        name: /sign up/i,
      });
  
      expect(signInButton).not.toBeInTheDocument();
      expect(signUpButton).not.toBeInTheDocument();
    });
  
    it('should sign out is visible', async () => {
      await renderComponent();
  
      const signOutButton = screen.getByRole('link', {
        name: /sign out/i,
      });
  
      expect(signOutButton).toBeInTheDocument();
      expect(signOutButton).toHaveAttribute('href', '/signout');
    });
  });
  
  describe('when user is not signed in', () => {
    createServer([
      {
        path: '/api/user',
        res: () => {
          return { user: null };
        },
      },
    ]);
  
    it('should sign in and sign up are visible', async () => {
      await renderComponent();
  
      const signInButton = screen.getByRole('link', {
        name: /sign in/i,
      });
      const signUpButton = screen.getByRole('link', {
        name: /sign up/i,
      });
  
      expect(signInButton).toBeInTheDocument();
      expect(signInButton).toHaveAttribute('href', '/signin');
      expect(signUpButton).toBeInTheDocument();
      expect(signUpButton).toHaveAttribute('href', '/signup');
    });
  
    it('should sign out is not visible', async () => {
      await renderComponent();
  
      const signOutButton = screen.queryByRole('link', {
        name: /sign out/i,
      });
  
      expect(signOutButton).not.toBeInTheDocument();
    });
  });
});
