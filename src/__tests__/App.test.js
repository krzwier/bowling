import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {

    it('renders without crashing', () => {
        render(<App />);
    });

    it('renders a ScoreBoard component', () => {
        render(<App />);
        const scoreBoard = document.querySelector('.scoreboard');
        expect(scoreBoard).toBeInTheDocument();
      });

      it('renders a RollBoard component', () => {
        render(<App />);
        const rollBoard = document.querySelector('.rolls');
        expect(rollBoard).toBeInTheDocument();
      });


});


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
