import React from 'react'
import send from '../../assets/send.svg'
import '../Admin/style.css'
import arrow from '../../assets/Arrow.svg'

const AdminChat = ({ isOpen, messages }) => {
   return (
      <>
         <div className="admin-chat__cross-close" onClick={() => isOpen(() => false)}>
            <img src={arrow} alt="close cross" />
         </div>

         <div class="chatBoxChild modal-chat">
            <div className="manager_active_dialog message">
               <div className="clientsMessages">
                  <div className="message_client">Привет</div>
               </div>
               <div className="managerMessages">
                  <div className="message_manager">Иди</div>
               </div>
               <div className="managerMessages">
                  <div className="message_manager">Иди</div>
               </div>
               <div className="clientsMessages">
                  <div className="message_client">Привет</div>
               </div>
            </div>

            <div className="chatBox_active_send">
               <input className="manager_message__input" placeholder='Введите сообщение' />
               <img className='manager_send_massage' src={send} alt='send message ' />
            </div>
         </div>
      </>
   )
}

export default AdminChat