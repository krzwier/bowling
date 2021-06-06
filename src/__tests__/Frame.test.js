import Frame from '../Frame';
import { render, screen } from '@testing-library/react';


describe('Frame', () => {

    // it('should render', () => {
    //     render(<Frame frame={frame}/>)
    // });

    it('if rolls 1 and 2 are both null', () => {
        const frame = {
            roll1: null,
            roll2: null
        }
        render(<Frame frame={frame}/>);
        const total = document.querySelector('.total').textContent;
        expect(total).toBe("");
    });

    it('if roll 2 is null, return roll 1', () => {
        const frame = {
            roll1: 5,
            roll2: null
        }
        render(<Frame frame={frame}/>);
        const total = document.querySelector('.total').textContent;
        expect(total).toBe("5");
    });

    it('if rolls are 4 and 5, sum should be 9', () => {
        const frame = {
            roll1: 4,
            roll2: 5
        }
        render(<Frame frame={frame}/>);
        const total = document.querySelector('.total').textContent;
        expect(Number(total)).toEqual(9);
    });

    it('if rolls are 3 and 3, sum should be 6', () => {
        const frame = {
            roll1: 3,
            roll2: 3
        }
        render(<Frame frame={frame}/>);
        const total = document.querySelector('.total').textContent;
        expect(Number(total)).toEqual(6);
    });
    
    // it('should render', () => {
    //     render(<ScoreBoard />)
    //     const frames = screen.queryAllByTestId('frame');
    //     expect(frames.length).toEqual(10);
    // });

});

// const header = screen.queryByText(/all the stickies/);
// expect(header).toBeInTheDocument();