// import React from 'react';
import ScoreBoard from '../ScoreBoard';
import Frame from '../Frame';
// import {shallow} from 'enzyme';
import { render, screen } from '@testing-library/react';


describe('Scoreboard', () => {

    it('should render ten Frame components', () => {
        render(<ScoreBoard />)
        const frames = screen.queryAllByTestId('frame');
        expect(frames.length).toEqual(10);
    });

});

// const header = screen.queryByText(/all the stickies/);
// expect(header).toBeInTheDocument();