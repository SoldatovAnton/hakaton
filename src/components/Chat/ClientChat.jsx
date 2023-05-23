import React from 'react'
import "./Chat.css"
import sendBtn from '../../assets/send.svg'
import { Link } from 'react-router-dom';
import { LOGIN_PATH } from '../../utils/routeConstants';

const ClientChat = () => {

   // const isAuthorised = useSelector(selectIsAuthorised);
   const isAuthorised = false;

   return (
      <div className='client-chat'>
         <div className="client-chat-header">
            Чат поддержки
         </div>
         <div className="client-chat-dialog">
            {
               isAuthorised
                  ? <div className='chat-messages'>
                     <div className='message'>
                        <span className="message-author">Менеджер</span>
                        <div className="message-text">Чем могу помочь?</div>
                     </div>
                     <div className='message client-message'>
                        <span className="message-author">Клиент</span>
                        <div className="message-text client-text">У меня проблема</div>
                     </div>

                     <div className='message'>
                        <span className="message-author">Менеджер</span>
                        <div className="message-text">Чем могу помочь?</div>
                     </div>
                     <div className='message client-message'>
                        <span className="message-author">Клиент</span>
                        <div className="message-text client-text">У меня проблема</div>
                     </div>
                     <div className='message client-message'>
                        <span className="message-author">Клиент</span>
                        <div className="message-text client-text">У меня проблема</div>
                     </div>

                  </div>
                  : <p className='client-register-text'>
                     Чтобы задать вопрос, пожалуйста, зарегистрируйтесь или авторизируйтесь в системе
                  </p>
            }
         </div>
         <div className="client-chat-input">
            {
               isAuthorised
                  ? <div className='chat-block'>
                     <input className='chat-input' type="text" />
                     <button className='send-button'><img src={sendBtn} className='send-message-icon' alt="send button" /></button>
                  </div>
                  : <Link to={LOGIN_PATH} className='client-chat__button'>Войти</Link>
            }
         </div>
      </div>
   )
}

export default ClientChat