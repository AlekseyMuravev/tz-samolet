import React from 'react'
import { Link } from 'react-router-dom'

function Region({ fullname = null, libraries = null, order = null }) {
    return (
        <Link to={`/region/id=${order}`}>
            <div className="region">
                <h2>{fullname}</h2>
                <div className="library">
                    <p>Количество библиотек:</p>
                    <p>{libraries}</p>
                </div>
            </div>
        </Link >
    )
}

export default Region
