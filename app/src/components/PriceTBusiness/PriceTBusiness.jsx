import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Style from './PriceTBusiness.module.css';
import Logo from './logo.png';
import Qr from './qr.png';

export default function PriceTBusiness() {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisability = () => setIsVisible(!isVisible);
  return (
    <div className={Style.priceBusiness_container}>
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
              <h3>ВХОДНОЙ БИЛЕТ BUSINESS</h3>
            </div>
            <div className={Style.two_two_text}>
              <p>Цена</p>
              <h3>3500 руб. действительна до окончания мероприятия</h3>
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
      <div className={Style.block_qestion_bis}>
        <div className={Style.questions_block}>
          <div className={Style.btn}>
            <h1>Что входит в стоимость входного business билета?</h1>
            <button type="button" onClick={handleVisability}>Click me</button>
          </div>
          <div className={Style.hidden_block}>
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
                  <li>Разовое посещение мероприятия на выбор в любой из дней с 20 по 25 июля</li>
                  <li>Билет дает право входа на территорию МАКС-2021</li>
                  <li>Осмотра выставочной экспозиции внутри павильонов и авиационных экспонатов на статической экспозиции.</li>
                  <li>В бизнес дни с 20 по 22 июля демонстрационные полеты проходят по специальному расписанию.</li>
                  <li>В дни с 23 по 25 июля летная программа проходит в течение всего дня с участием лучших пилотажных групп.</li>
                  <li>Дети до 14 лет проходят бесплатно в сопровождении взрослых членов семьи.</li>
                </ul>
              </motion.div>
            )
          }
            </AnimatePresence>

          </div>
        </div>
      </div>
    </div>
  );
}
