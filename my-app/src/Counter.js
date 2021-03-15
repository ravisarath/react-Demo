import React from 'react';

var count = 0;

function Counter() {
    count++

    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}


export default Counter