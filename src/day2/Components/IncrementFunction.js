import React, { useState } from 'react'

export default function IncrementFunction() {
    const [counter, setState] = useState(0)
    const click = () => {
        setState(prev => prev + 1)
    }
    return (
        <div style={{ marginLeft: 45 + '%', marginTop: 5 + 'rem', fontSize: 3 + 'rem' }}>
            <button style={{ fontSize: 3 + 'rem' }} onClick={click}>Increment</button>
            <span> {counter}</span>
        </div>
    )
}
