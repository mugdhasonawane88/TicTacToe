import { fireEvent, render, screen } from '@testing-library/react';
import TicTacToe from '../TicTacToe';

describe('ticTacToe component', ()=>{

  test('should render ticTacToe component', () => {
    const {asFragment} = render(<TicTacToe />);
    expect(asFragment).toBeDefined();
  });

  test('should create board with initial cell empty', () => {
    const {asFragment} = render(<TicTacToe />);
    const cell_0 = screen.queryAllByRole('cell')[0];
    const cell_1 = screen.queryAllByRole('cell')[1];
    const cell_2 = screen.queryAllByRole('cell')[2];
    const cell_3 = screen.queryAllByRole('cell')[3];
    const cell_4 = screen.queryAllByRole('cell')[4];
    const cell_5 = screen.queryAllByRole('cell')[5];
    const cell_6 = screen.queryAllByRole('cell')[6];
    const cell_7 = screen.queryAllByRole('cell')[7];
    const cell_8 = screen.queryAllByRole('cell')[8];
    expect((cell_0).textContent).toBe("");
    expect((cell_1).textContent).toBe("");
    expect((cell_2).textContent).toBe("");
    expect((cell_3).textContent).toBe("");
    expect((cell_4).textContent).toBe("");
    expect((cell_5).textContent).toBe("");
    expect((cell_6).textContent).toBe("");
    expect((cell_7).textContent).toBe("");
    expect((cell_8).textContent).toBe("");
  });

  test('should have nine nmuber of cell ', () => {
    const {asFragment} = render(<TicTacToe />);
    expect(screen.queryAllByRole('cell')).toHaveLength(9);
  });

  test('should clear all cell content onClick of Replay button ', () => {
    const {asFragment} = render(<TicTacToe />);
    const replayBtn = screen.getByRole('button', {name: 'Replay'});
    fireEvent.click(replayBtn);
    const cell_0 = screen.queryAllByRole('cell')[0];
    const cell_1 = screen.queryAllByRole('cell')[1];
    const cell_2 = screen.queryAllByRole('cell')[2];
    const cell_3 = screen.queryAllByRole('cell')[3];
    const cell_4 = screen.queryAllByRole('cell')[4];
    const cell_5 = screen.queryAllByRole('cell')[5];
    const cell_6 = screen.queryAllByRole('cell')[6];
    const cell_7 = screen.queryAllByRole('cell')[7];
    const cell_8 = screen.queryAllByRole('cell')[8];
    expect((cell_0).textContent).toBe("");
    expect((cell_1).textContent).toBe("");
    expect((cell_2).textContent).toBe("");
    expect((cell_3).textContent).toBe("");
    expect((cell_4).textContent).toBe("");
    expect((cell_5).textContent).toBe("");
    expect((cell_6).textContent).toBe("");
    expect((cell_7).textContent).toBe("");
    expect((cell_8).textContent).toBe("");
  });
})

