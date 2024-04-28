import React from 'react'
import "./Index.css"

export const Index = () => {
    return (
      <div className="container">
      <div className="question">I am a </div>
      <div className="card-container">
        <div className="card">
          <img src="./admin.png" alt="Admin" />
          <button className="button">
            <a href="http://localhost:5173/admin">Admin</a>
          </button>
        </div>
        <div className="card">
          <img src="./user.png" alt="Customer" />
          <button className="button">
            <a href="/customer">Customer</a>
          </button>
        </div>
      </div>
    </div>
    )
}
