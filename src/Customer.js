import React from 'react'
import una from './Tradimages/Union 1.svg'
import group8699 from './Tradimages/Group 8699.svg'
import Rid from './Tradimages/logo-chrome.svg'
const Customer = () => {
  return (
    <div>
        <div className='container-fluid review'>
            <div className='container'>
                <div className='cust'><h4>Customer's Review</h4></div>
            <div className='row revs'>
                <div className='col-4'>
                    <img src= {una} alt="" className='reva' />
                    <div>
                    <img src={group8699} alt=""  className='r1'/>
                    </div>
                    <div>
                    <p className='k1'>Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to  navigate.</p>
                    </div>
                    
                    <div className='curet'>
                        <img src={Rid} alt="" className='rid1' />
                    </div>
                    <p className='ireti'>Ireti <br />Nigeria</p>
                </div>

                <div className='col-4'>
                    <img src= {una} alt="" className='revb' />
                    <div>
                        <img src={group8699} alt="" className='r2' />
                        <p className='k2'>They have the best rate compared to  other platforms with fast payout.</p>
                    </div>
                    <div className='cubay'>
                        <img src={Rid} alt="" className='rid2' />
                    </div>
                    <p className='bayo'>Bayo <br />USA</p>
                </div>

                <div className='col-4'>
                    <img src={una} alt=""  className='revc'/>
                    <div>
                        <img src={group8699} alt=""  className='r3'/>
                        <p className='k3'>Easy to fund and withdraw coins or cash on their platform. I will definitely trade with them again.</p>
                    </div>
                    <div>
                        <img src={Rid} alt="" className='rid3' />
                    </div>
                    <p className='goke'>Olagoke <br /> Nigeria</p>
                </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Customer