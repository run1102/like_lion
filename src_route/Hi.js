import React from "react"
import { Routes, Route, Link } from "react-router-dom"

const Hi = () => {
    return (
        <div>
            Hi
            <div>
            <Link to="/bye">
            <button>byebye</button>
            </Link>
      </div>
        </div>
        
        )
    }

export default Hi