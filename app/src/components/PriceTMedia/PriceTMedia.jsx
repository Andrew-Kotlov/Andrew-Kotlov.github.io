import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Style from './PriceTMedia.module.css';
import Media from './media.jpg';
import Logo from './logo.png';
import Qr from './qr.png';

export default function PriceTMedia() {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisability = () => setIsVisible(!isVisible);
  const [isVisible2, setIsVisible2] = useState(false);
  const handleVisability2 = () => setIsVisible2(!isVisible2);
  return (
    <div className={Style.PriceMedia_container}>
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
              <h3>БИЛЕТ НА МЕДИАПЛАТФОРМУ</h3>
            </div>
            <div className={Style.two_two_text}>
              <p>Цена</p>
              <h3>13000 руб. действительна с 19 июля до окончания мероприятия</h3>
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
            <h1>ЧТО ТАКОЕ МЕДИАПЛАТФОРМА?</h1>
            <button type="button" onClick={handleVisability2}>Click me</button>
          </div>
          <div className={Style.hidden_block}>
            <AnimatePresence>
              {
            isVisible2 && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                style={{ overflow: 'hidden' }}
              >

                <div className={Style.text_pri}>
                  Медиаплатформа - это удобно расположенная (обратная от зрителей сторона ВПП) специализированная площадка для фото- и видеосъемок, представляющая собой устойчивую двухэтажную конструкцию высотой 4 метра. Второй этаж медиаплатформы создан как смотровая площадка с открытым обзором, позволяющая производить съемки полетов «по солнцу». Рядом с медиаплатформой расположен шатер (10-15 кв. м), в котором будут размещены столы с прохладительными напитками и легкими закусками.
                </div>
                <div className={Style.block_img}>
                  <img src={Media} alt="media" />
                </div>
                <div className={Style.text_bye}>
                  Посетителям, купившим билеты с возможностью фото- и видеосьемки с медиаплатформы в предварительной продаже, необходимо зарегистрироваться за час до начала летной программы у менеджера в офисе дирекции МАКС-2021 на территории выставочного комлекса и пройти процедуру обязательного страхования (включена в стоимость билета).
                </div>

              </motion.div>
            )
          }
            </AnimatePresence>

          </div>
        </div>
      </div>
      <div className={Style.block_qestion_bis}>
        <div className={Style.questions_block}>
          <div className={Style.btn}>
            <h1>ЧТО ВХОДИТ В СТОИМОСТЬ БИЛЕТА НА МЕДИАПЛАТФОРМУ?</h1>
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
                  <li>Вход на территорию МАКС 2021;</li>
                  <li>Разовое посещение медиаплатформы с 20 по 25 июля;</li>
                  <li>Лучшие места для фото- и видеосъемки;</li>
                  <li>Доставку посетителей от Дирекции к месту съемок и обратно. Доставка посетителей будет осуществляться служебным автотранспортом с табличками «Медиаплатформа» по расписанию от офиса Дирекции на территории выставочного комлекса;</li>
                  <li>Бар с прохладительными напитками и легкими закусками;</li>
                  <li>Обязательное страхование от несчастного случая включено в стоимость билета.</li>
                </ul>
                <div className={Style.price_text_alert}>
                  <p>Необходима регистрация в дирекции за 1 час до начала летной программы!</p>
                  <p>Дети на медиаплатформу не допускаются.</p>
                </div>
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
