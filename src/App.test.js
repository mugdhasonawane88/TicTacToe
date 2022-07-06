import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', ()=>{
  test('should have the header & title element', () => {
    const {asFragment} = render(<App />);
    
    const headerElement = screen.getByTestId('header');
    const ticTacToeTitle = screen.getByRole('heading', {level: 1});
    expect(headerElement).toBeInTheDocument();
    expect(ticTacToeTitle).toBeInTheDocument();
  });
})

