import React from 'react'

const Card = ({name, age, gender, title}) => {
    // const {name, age, gender, title} = props

    return (
        <div className="app-main">
            <div className="card-main">
                <h1>{title} Card</h1>
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Gender: {gender}</div>
            </div>
        </div>
    )
}

export default Card