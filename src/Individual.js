import React from 'react'
import { Link } from 'react-router-dom'
const Individual = () => {
  return (
    <div>
        <div className='container individual'>
         <div className='individual2'>
         <h4 className='indih4 '>Welcome</h4>
         <div className='indibtn'>
             <button className='indi1'>
                 <Link to='/Individual'>Individual</Link>
             </button>
             <button className='indi2'>
                 <Link to='/Business'> Business</Link>
             </button>
         </div>
         <div className='coin'>
          
          <form action="#">
              <label htmlFor="username"></label>
            <input type="text" placeholder='username' className='form4' />
          </form>
        </div>
        <div className='coin'>
          <form action="#">
              <label htmlFor="FullName"></label>
            <input type="text" placeholder='Full Name' className='form5' />
          </form>
        </div>
        <div className='coin'>
          <form action="#">
              <label htmlFor="Email"></label>
            <input type="email" placeholder='Email' className='form6' />
          </form>
        </div>
        <div className='coin'>
          <form action="#">
              <label htmlFor="Phone Number"></label>
            <input type="email" placeholder='Phone Number' className='form7' />
          </form>
        </div>
        <div className='coin'>
          <form action="#">
              <label htmlFor="Referral code"></label>
            <input type="text" placeholder='Referral code' className='form8' />
          </form>
        </div>
        <p className='indip text-center'>By clicking the sign up button below, you agree to TradExpress <a href="#">terms and services</a></p>
        <button className='signup'>
          Sign up
        </button> 
        <p className='text-center'>Already have an account? <a href="#">Click here</a></p>   
        </div>   
        </div>
    </div>
  )
}

export default Individual