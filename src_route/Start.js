import React from "react"
import { Routes, Route, Link } from "react-router-dom"

const Start = () => {
    return (
        <div>
           <div>
                <Link exact to="/hi">
                <button>start</button>
                </Link>
            </div>
        </div>
        
        )
    }

export default Start
