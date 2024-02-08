import React from 'react';
import style from '@/Scss/components/_invitation.module.scss';

const Invite = () => {
  return (
    <div className={style.invite_component}>
        <div className={style.invite_card_1}></div>
        <div className={style.invite_card_2}></div>
        <div className={style.invite_card_3}></div>
    </div>
  )
}

export default Invite