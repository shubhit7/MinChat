import React from 'react'

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">MinChat</span>
        <span className="title">Login</span>
        <form>
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <button>Login</button>
        </form>
        <p>
          Don't have an account? Register
        </p>
      </div>
    </div>
  )
}

export default Login