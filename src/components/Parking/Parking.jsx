import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Style from './Parking.module.css';
import Logo from './logo.png';
import Qr from './qr.png';
import Parkingg from './parking.jpg';

export default function Parking() {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisability = () => setIsVisible(!isVisible);
  return (
    <div className={Style.parking_container}>
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
              <h3>ТАЛОНЫ НА ПАРКОВКУ</h3>
            </div>
            <div className={Style.two_two_text}>
              <p>Цена</p>
              <p>Автостоянки № 3 и 7</p>
              <h3>3 000 руб.</h3>
              {/* <p>Автостоянка № 2</p>
              <h3>4 000 руб.</h3>
              <p>Автостоянка № 4 для автобусов</p>
              <h3>7 000 руб.</h3> */}
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
          <h1>ПОДРОБНЕЕ О ТАЛОНЕ НА ПАРКОВКУ</h1>
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
                  <li>Автопропуск выдается вместе с талоном на парковку. Талон на парковку не дает право на посещение мероприятия.</li>
                  <li>Талон на парковку – подтверждение о приобретении услуги у компании Партер.ру на билетном бланке.</li>
                  <li>Автопропуск – пропуск для автотранспорта, дающий право въезда в г.о. Жуковский на время проведения МАКС-2021 и на парковку на территории Аэродрома «Раменское»</li>
                </ul>
                <div className={Style.about_img}>
                  <img src={Parkingg} alt="parking" />
                </div>
                <div className={Style.about_img_text}>
                  <p>В настоящее время вы можете оплатить талон на парковку. Получить оплаченный талон и автопропуск вы сможете в кассах и курьерской доставкой в июне 2021 года. Следите за обновлением информации (единый телефон +7 495 258-0000). </p>
                </div>
              </motion.div>
            )
          }
        </AnimatePresence>
      </div>
    </div>
  );
}
