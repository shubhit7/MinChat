import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">MinChat</span>
      <div className="user">
        <img src='https://images.pexels.com/photos/14208426/pexels-photo-14208426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
        <span>Shubhit</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar