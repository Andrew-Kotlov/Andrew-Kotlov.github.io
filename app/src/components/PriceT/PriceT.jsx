import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Style from './PriceT.module.css';
import Logo from './logo.png';
import Qr from './qr.png';

export default function PriceT() {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisability = () => setIsVisible(!isVisible);

  return (
    <div className={Style.PriceT_container}>
      <div className={Style.ticket_block}>
        <div className={Style.block_one}>
          1
        </div>
        <div className={Style.block_two}>
          <div className={Style.two_one}>
            <div className={Style.two_one_img_logo}>
              <img src={Logo} alt="logo" />
            </div>
            <div className={Style.two_one_img_logo_qr}>
              <img src={Qr} alt="logo" />
            </div>
          </div>
          <div className={Style.two_two}>
            <div className={Style.two_two_text}>
              <p>Категория</p>
              <h3>ВХОДНОЙ БИЛЕТ</h3>
            </div>
            <div className={Style.two_two_text}>
              <p>Цена</p>
              <h3>1000 руб. действительна с 19 июля до окончания мероприятия  БИЛЕТ</h3>
            </div>
          </div>
          <div className={Style.two_three}>
            <div className={Style.two_three_date}>
              <p>Дата проведения</p>
              <h3>21,22,23,24,25 Июля</h3>
            </div>
            <div className={Style.two_three_btn}>
              <button type="button">КУПИТЬ БИЛЕТ</button>
            </div>
          </div>
        </div>
        <div className={Style.block_three}>
          1
        </div>
      </div>
      <div className={Style.block_questions}>
        <div className={Style.questions_btn}>
          <h1>Что входит в стоимость входного билета?</h1>
          <button type="button" onClick={handleVisability}>click me</button>
        </div>
        <AnimatePresence>
          {
            isVisible && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                style={{ overflow: 'hidden' }}
              >
                <ul>
                  <li>Разовое посещение мероприятия в один из дней – 21, 22, 23, 24 или 25 июля</li>
                  <li>Дети до 14 лет проходят бесплатно в сопровождении взрослых членов семьи.</li>
                </ul>
              </motion.div>
            )
          }
        </AnimatePresence>
      </div>
    </div>
  );
}
