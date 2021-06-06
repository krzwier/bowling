import React, { useState } from 'react';
import logo from './logo.svg';
import RollBoard from './RollButtons';
import ScoreBoard from './ScoreBoard';

const App = () => {

    // const [state, setState] = useState(initialState);

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

    return (
        <div className="App">
            <RollBoard />
            <ScoreBoard scoreSheet={scoreSheet}/>
        </div>
    );
}


export default App;
