import React from 'react'

// Styles
import './App.scss'

// Components
import Card from './Card'

const App = () => {

    return (
        <div className="app-main">
            <Card name="John Doe" age={30} gender="Male" title="Dev" />
            <Card name="MAtt Bonner" age={31} gender="Male" title="Gunner" />
        </div>
    )
}

export default App