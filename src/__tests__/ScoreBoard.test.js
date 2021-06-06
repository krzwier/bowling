// import React from 'react';
import ScoreBoard from '../ScoreBoard';
import Frame from '../Frame';
// import {shallow} from 'enzyme';
import { render, screen } from '@testing-library/react';


describe('Scoreboard', () => {

    it('should render ten Frame components', () => {
        const scoreSheet = {
            frame1: {
                roll1: 3,
                roll2: 4,
            },
            frame2: {
                roll1: 5,
                roll2: 1,
            },
            frame3: {
                roll1: 3,
                roll2: 4,
            },
            frame4: {
                roll1: 5,
                roll2: 1,
            },
            frame5: {
                roll1: 3,
                roll2: 4,
            },
            frame6: {
                roll1: 5,
                roll2: 1,
            },
            frame7: {
                roll1: 3,
                roll2: 4,
            },
            frame8: {
                roll1: 5,
                roll2: 1,
            },
            frame9: {
                roll1: 3,
                roll2: 4,
            },
            frame10: {
                roll1: 5,
                roll2: 1,
            }
        }
        render(<ScoreBoard scoreSheet={scoreSheet}/>)
        const frames = screen.queryAllByTestId('frame');
        expect(frames.length).toEqual(10);
    });



});

describe('Two sequential frames in Scoreboard', () => {
    it('should add frame 1 and frame 2 independently', () => {
        const scoreSheet = {
            frame1: {
                roll1: 3,
                roll2: 4,
            },
            frame2: {
                roll1: 5,
                roll2: 1,
            },
            frame3: {
                roll1: 3,
                roll2: 4,
            },
            frame4: {
                roll1: 5,
                roll2: 1,
            },
            frame5: {
                roll1: 3,
                roll2: 4,
            },
            frame6: {
                roll1: 5,
                roll2: 1,
            },
            frame7: {
                roll1: 3,
                roll2: 4,
            },
            frame8: {
                roll1: 5,
                roll2: 1,
            },
            frame9: {
                roll1: 3,
                roll2: 4,
            },
            frame10: {
                roll1: 5,
                roll2: 1,
            }
        }
        render(<ScoreBoard scoreSheet={scoreSheet}/>)
        const frame1Total = Number(document.querySelector("#frame1 .total").textContent);
        const frame2Total = Number(document.querySelector("#frame2 .total").textContent);
        expect(frame1Total).toEqual(7);
        expect(frame2Total).toEqual(6);

    });
});

// const header = screen.queryByText(/all the stickies/);
// expect(header).toBeInTheDocument();