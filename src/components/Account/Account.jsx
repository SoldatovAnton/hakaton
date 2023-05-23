import React from 'react'
import { Outlet } from 'react-router-dom'
import './Account.css';
import ClientChat from '../Chat/ClientChat';


const Account = () => {
   return (
      <>
         <div className='account container'>
            <div className="account-logo">
               <h1 className='account-logo__text'>ROWI</h1>
               <h4 className='account-descript'>Финансирование <br /> бизнеса</h4>
            </div>
            <div className="account-auth">
               <Outlet />

            </div>
            <span className="account-gradient"></span>
         </div>
         <ClientChat />
      </>
   )
}

export default Account