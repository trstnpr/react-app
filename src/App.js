import React, { useState } from 'react'

const App = () => {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState('');

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleOnChange =(e) => {
        setUser(e.target.value)
    }

    return (
        <>
            <div>Count {count}</div>
            <button onClick={handleIncrement}>Increment</button>
            <hr/>
            <input name="user" onChange={handleOnChange} value={user} />
        </>
    )
}

export default App