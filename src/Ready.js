import React from 'react'
import reda from './Tradimages/Group 68 (1).svg';
import redb from './Tradimages/Group 69 (1).svg';


const Ready = () => {
  return (
    <div className='ready'>
        <div className='container'>
            <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
            <h4>Create your account for free and start trading today!</h4>
            <div>
                <button className='redybtn mt-4'>Get started</button>
            </div>
            <div className='reds'>
                <img src={reda} alt="" className='redymga' />
                <span className='redspan'>
                    <img src={redb} alt="" className='redymgb' />
                </span>
            </div>
        </div>
    </div>
  )
}
export default Ready