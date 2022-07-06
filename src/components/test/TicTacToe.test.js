import { fireEvent, render, screen } from '@testing-library/react';
import TicTacToe from '../TicTacToe';

describe('ticTacToe component', ()=>{

  test('should render ticTacToe component', () => {
    const {asFragment} = render(<TicTacToe />);
    expect(asFragment).toBeDefined();
  });

  test('should create empty board when game start', () => {
    const {asFragment} = render(<TicTacToe />);
    const top_left_tile = screen.queryAllByRole('cell')[0];
    const top_middle_tile = screen.queryAllByRole('cell')[1];
    const top_right_tile = screen.queryAllByRole('cell')[2];
    const center_left_tile = screen.queryAllByRole('cell')[3];
    const center_middle_tile = screen.queryAllByRole('cell')[4];
    const center_right_tile = screen.queryAllByRole('cell')[5];
    const bottom_left_tile = screen.queryAllByRole('cell')[6];
    const bottom_middle_tile = screen.queryAllByRole('cell')[7];
    const bottom_right_tile = screen.queryAllByRole('cell')[8];
    expect((top_left_tile).textContent).toBe("");
    expect((top_middle_tile).textContent).toBe("");
    expect((top_right_tile).textContent).toBe("");
    expect((center_left_tile).textContent).toBe("");
    expect((center_middle_tile).textContent).toBe("");
    expect((center_right_tile).textContent).toBe("");
    expect((bottom_left_tile).textContent).toBe("");
    expect((bottom_middle_tile).textContent).toBe("");
    expect((bottom_right_tile).textContent).toBe("");
  });

  test('should have nine nmuber of cell ', () => {
    const {asFragment} = render(<TicTacToe />);
    expect(screen.queryAllByRole('cell')).toHaveLength(9);
  });

  test('should clear all cell content onClick of Replay button ', () => {
    const {asFragment} = render(<TicTacToe />);
    const replayBtn = screen.getByRole('button', {name: 'Replay'});
    fireEvent.click(replayBtn);
    const top_left_tile = screen.queryAllByRole('cell')[0];
    const top_middle_tile = screen.queryAllByRole('cell')[1];
    const top_right_tile = screen.queryAllByRole('cell')[2];
    const center_left_tile = screen.queryAllByRole('cell')[3];
    const center_middle_tile = screen.queryAllByRole('cell')[4];
    const center_right_tile = screen.queryAllByRole('cell')[5];
    const bottom_left_tile = screen.queryAllByRole('cell')[6];
    const bottom_middle_tile = screen.queryAllByRole('cell')[7];
    const bottom_right_tile = screen.queryAllByRole('cell')[8];
    expect((top_left_tile).textContent).toBe("");
    expect((top_middle_tile).textContent).toBe("");
    expect((top_right_tile).textContent).toBe("");
    expect((center_left_tile).textContent).toBe("");
    expect((center_middle_tile).textContent).toBe("");
    expect((center_right_tile).textContent).toBe("");
    expect((bottom_left_tile).textContent).toBe("");
    expect((bottom_middle_tile).textContent).toBe("");
    expect((bottom_right_tile).textContent).toBe("");
  });

  test('Should draw X on first click', () => {
    const {asFragment} = render(<TicTacToe />);
    const replayBtn = screen.getByRole('button', {name: 'Replay'});
    fireEvent.click(replayBtn);

    const top_left_tile = screen.queryAllByRole('cell')[0];
    fireEvent.click(cell_0);
    expect((top_left_tile).textContent).toEqual("X");
  });

  test('Turn details should be present in document', () => {
    const {asFragment} = render(<TicTacToe />);
    expect(screen.getByTestId('turn-detail')).toBeInTheDocument();
  });

  test('Winner details should be present in document', () => {
    const {asFragment} = render(<TicTacToe />);
    expect(screen.getByTestId('winner')).toBeInTheDocument();
  });

  test('Should display winner name', () => {
    const {asFragment} = render(<TicTacToe />);
    const replayBtn = screen.getByRole('button', {name: 'Replay'});
    const winnerTxt = screen.getByTestId('winner');
    const top_left_tile = screen.queryAllByRole('cell')[0];
    const top_middle_tile = screen.queryAllByRole('cell')[1];
    const top_right_tile = screen.queryAllByRole('cell')[2];
    const center_left_tile = screen.queryAllByRole('cell')[3];
    const center_middle_tile = screen.queryAllByRole('cell')[4];
    const center_right_tile = screen.queryAllByRole('cell')[5];
    const bottom_left_tile = screen.queryAllByRole('cell')[6];
    const bottom_middle_tile = screen.queryAllByRole('cell')[7];
    const bottom_right_tile = screen.queryAllByRole('cell')[8];
    fireEvent.click(top_left_tile);
    fireEvent.click(center_left_tile);
    fireEvent.click(top_middle_tile);
    fireEvent.click(center_middle_tile);
    fireEvent.click(top_right_tile);

    expect((winnerTxt).textContent).toBe("Player One won!");
    expect(winnerTxt).toBeVisible();
  });
})

