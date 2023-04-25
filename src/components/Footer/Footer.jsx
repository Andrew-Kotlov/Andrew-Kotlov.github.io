/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Style from './Footer.module.css';
import Logo from './logo.png';

export default function Footer() {
  return (
    <div className={Style.footer_container}>
      <div className={Style.footer_block}>
        <div className={Style.footer_block_one}>
          <h3>О нас</h3>
          <ul>
            <li><a href="#">Обратная связь</a></li>
            <li><a href="#">Кассы</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>
        <div className={Style.footer_block_two}>
          <h3>Покупателям</h3>
          <ul>
            <li><a href="#">Возврат билетов</a></li>
            <li><a href="#">Правила пользования билетом БСО</a></li>
            <li><a href="#">Отмены, замены, переносы мероприятий</a></li>
            <li><a href="#">Часто задаваемые вопросы</a></li>
            <li><a href="#">Безопасность покупателя</a></li>
          </ul>
        </div>
        <div className={Style.footer_block_three}>
          <h3>Социальные сети</h3>
          <ul>
            <li><a href="#">Обратная связь</a></li>
            <li><a href="#">Кассы</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>
        <div className={Style.footer_block_four}>
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}
