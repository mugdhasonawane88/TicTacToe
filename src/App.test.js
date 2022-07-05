import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', ()=>{
  test('should have the title', () => {
    const {asFragment} = render(<App />);
    const ticTacToeTitle = screen.getByRole('heading', {level: 1});
    expect(ticTacToeTitle).toBeInTheDocument();
  });
})

