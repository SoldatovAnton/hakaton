import React, { useEffect, useState } from 'react'
import './style.css'
import { Link, useLocation } from 'react-router-dom';
import { ADMIN_CHAT_PATH } from '../../utils/routeConstants';
import AdminChat from '../Chat/AdminChat';

const AdminChatsCreated = () => {

   const [messages, setMessages] = useState([]);

   let location = useLocation();
   let tab = location.pathname.split('/').splice(-1)[0];
   const activeTab = (location) => {
      if (location === 'active') return 'chatBox_session active_session';
      else if (location === 'created') return 'chatBox_session created_session';
      else if (location === 'closed') return 'chatBox_session closed_session';
   }

   const [chatIsOpen, setChatIsOpen] = useState(false);

   const chatOpen = () => {
      setChatIsOpen(() => !chatIsOpen)
   }

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
         .then(response => response.json())
         .then(json => setMessages(() => json))
   }, [])

   console.log(messages);

   return (
      <>
         {chatIsOpen
            ?
            <AdminChat messages={messages} isOpen={setChatIsOpen} />
            :
            (
               <div className={activeTab(tab)}>
                  <div className="chatBoxChild">
                     <div className="chatMessage" onClick={() => chatOpen()}>
                        <p className="message">Hello</p>
                     </div>
                     <div className="chatMessage">
                        <p className="message">Hello</p>
                     </div>
                     <div className="chatMessage">
                        <p className="message">Hello</p>
                     </div>
                     <div className="chatMessage">
                        <p className="message">Hello</p>
                     </div>
                     <div className="chatMessage">
                        <p className="message">Hello</p>
                     </div>
                     <div className="chatMessage">
                        <p className="message">Hello</p>
                     </div>
                  </div>
               </div>
            )
         }
      </>
   )
}

export default AdminChatsCreated