import React, { useState } from 'react'
import HideBox from './HideBox';

export default function HideAndSeekFunc() {
    const [show, setState] = useState(false)

    const showAndHide = () => {
        setState(prev => !prev)
    }
    return (
        <div style={{ marginLeft: 600 }}>
            <button onClick={showAndHide}>show/hide</button>
            <div>
                {show ? <HideBox /> : null}
            </div>
        </div>
    )
}
