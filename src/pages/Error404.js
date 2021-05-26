import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
    return (
        <div className="error404">
            <h1>Error 404</h1>
            <h3>Not found</h3>
            <Link to="/juanivideo">
            <button>Juaniflix Home</button>
            </Link>
        </div>
    )
}
