import React from 'react'

function Person({person}) {
    return (
        <div>
            <div>
                <h2>I am {person.name}</h2>
                <h4>I am {person.age} years old.</h4>
                <h4>I like {person.skill}</h4>
            </div>
        </div>
    )
}

export default Person
