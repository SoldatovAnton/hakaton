import React from 'react'
import squiggle from '../../assets/squiggle.svg'
import './style.css'

const AdminHello = () => {
   return (
      <div class="manager_first_page">
         <div class="manager_dialog_hello">Хорошего дня!</div>
         <img class="manager_dialog_squiggle" src={squiggle} alt='squiggle' />
      </div>
   )
}

export default AdminHello