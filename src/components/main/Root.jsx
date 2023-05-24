import React, { useState } from 'react'
import './Main.css'
import './Base.css'
import chatButton from '../../assets/images/chatButton.svg'
import Header from './Header'
import Home from './Home'
import About from './About'
import Services from './Services'
import Clients from './Clients'
import Footer from './Footer'
import ClientChat from '../Chat/ClientChat'

const Root = () => {
   const [chatIsOpen, setChatIsOpen] = useState(false);

   const chatOpen = () => {
      setChatIsOpen(() => !chatIsOpen)
   }

   return (
      <>
         <Header />
         <Home />

         <About />
         <Services />
         <Clients />
         <Footer />

         {chatIsOpen
            ?
            <ClientChat isOpen={setChatIsOpen} />
            :
            <div className="chat-button" onClick={() => chatOpen()}>
               <img src={chatButton} alt="Chat button" />
            </div>
         }
      </>
   )
}

export default Root