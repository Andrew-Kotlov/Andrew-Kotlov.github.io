import React from 'react';
import Style from './Price.module.css';

export default function Price() {
  return (
    <div className={Style.price_container}>
      <div className={Style.price_block}>
        <div className={Style.price_block_text}>
          <h1>СТОИМОСТЬ И КАТЕГОРИИ БИЛЕТОВ</h1>
        </div>
        <div className={Style.price_block_text_kids}>
          <p>ВНИМАНИЕ – ДЕТИ ДО 14 ЛЕТ ПОСЕЩАЮТ АВИАСАЛОН БЕСПЛАТНО!</p>
        </div>
      </div>
    </div>
  );
}
