import React from 'react'
import { Link } from 'react-router-dom'
const Business = () => {
  return (
    <div>
        <div className='container business'>
         <div className=''>
         <h4 className='bush4'>Welcome</h4>
         <div className='busbtn'>
             <button className='bus1'>
                 <Link to='/Individual'>Individual</Link>
             </button>
             <button className='bus2'>
                 <Link to='/Business'> Business</Link>
             </button>
         </div>
         <div className='coin'>
          
          <form action="#">
              <label htmlFor="username"></label>
            <input type="text" placeholder='username' className='form8' />
          </form>
        </div>
        <div className='coin'>
          <form action="#">
              <label htmlFor="FullName"></label>
            <input type="text" placeholder='Full Name' className='form8' />
          </form>
        </div>
        <div className='coin'>
          <form action="#">
              <label htmlFor="Email"></label>
            <input type="email" placeholder='Email' className='form8' />
          </form>
        </div>
        <div className='coin'>
          <form action="#">
              <label htmlFor="Phone Number"></label>
            <input type="email" placeholder='Phone Number' className='form8' />
          </form>
        </div>
        <div className='coin'>
          <form action="#">
              <label htmlFor="Referral code"></label>
            <input type="text" placeholder='Referral code' className='form8' />
          </form>
        </div>
        <p className='busp'>By clicking the sign up button below, you agree to TradExpress <a href="#">terms and services</a></p>
        <button className='signup'>
          Sign up
        </button> 
        <p className='text-center'>Already have an account? <a href="#">Click here</a></p>   
        </div>   
        </div>
    </div>
  )
}

export default Business