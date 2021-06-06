import React, {useEffect} from 'react';
import "./Frame.css";

const Frame = (props) => {

    // useEffect(() => {
    //     console.log(props);
    // }, [])

    const frameId = `frame${props.frameNum}`;
    const roll1 = props.frame.roll1;
    const roll2 = props.frame.roll2;
    const total = () => {
        if (!roll1 && !roll2) {
            return null;
        } else if (!roll2) {
            return roll1;
        } else {
            return (roll1 + roll2)
        };
    }
    

    return (
        <div id={frameId} data-testid="frame" className="frame">
            <div className="rolls">
                <div className="roll1">{roll1}</div>
                <div className="roll2">{roll2}</div>
            </div>
            <div className="total">{total()}</div>
        </div>
    );
};
export default Frame;