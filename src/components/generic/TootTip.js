import React from 'react';
import ReactHover from 'react-hover'
const optionsCursorTrueWithMargin = {
    followCursor: true,
    shiftX: 0,
    shiftY: 0
}
function TootTip({ children, text, className, style,onClick }) {
    return ( <ReactHover
        options={optionsCursorTrueWithMargin}>
        <ReactHover.Trigger type='trigger'>
            <div onClick={onClick} style={style} className={className}>
                {children}
            </div>
        </ReactHover.Trigger>
        <ReactHover.Hover type='hover'>
            <div   style={{padding:"0.5em 1em",backgroundColor:"#131e2f",borderRadius:"1em",zIndex:"10000",}}>{text}</div>
        </ReactHover.Hover>
    </ReactHover>

    );
}

export default TootTip;