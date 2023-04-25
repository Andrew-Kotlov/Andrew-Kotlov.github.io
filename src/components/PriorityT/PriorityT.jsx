import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Style from './PriorityT.module.css';

export default function PriorityT() {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisability = () => setIsVisible(!isVisible);
  const [isVisible2, setIsVisible2] = useState(false);
  const handleVisability2 = () => setIsVisible2(!isVisible2);
  return (
    <div className={Style.Priority_container}>
      <div className={Style.PriorityTicket_block}>
        <div className={Style.ticket_block}>
          <div className={Style.ticket_category}>
            <div className={Style.ticket_category_one}>
              <p>Категория</p>
              <h3>ВХОДНОЙ БИЛЕТ PRIORITY</h3>
            </div>
            <div className={Style.ticket_category_two}>
              <p>Цена</p>
              <h3>22000 руб. Взрослый </h3>
              <h3>7000 руб. Детский </h3>
              <p>Групповая программа свыше 10 человек</p>
              <h3>18000 руб. Взрослый</h3>
            </div>
            <div className={Style.ticket_category_three}>
              <button type="button">Click</button>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.block_qestion_bis}>
        <div className={Style.questions_block}>
          <div className={Style.btn}>
            <h1>ЧТО ТАКОЕ КАТЕГОРИЯ PRIORITY?</h1>
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
                  PRIORITY CHALET – комфортабельная зона расположенная на первой линии шале (6-G ) с превосходным видом на ВПП, с летней верандой для просмотра летной программы в дни массового посещения «МАКС- 2021».

                  Внутреннее пространство представляет собой  уютную зону для отдыха Гостей (мягкие диваны, кресла, журнальные столики). Летняя веранда (зона Patio) оборудована мебелью из ротанга, зонтами от солнца, барной стойкой для комфортного размещения Гостей и для просмотра летной программы.
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
            <h1>ЧТО ВКЛЮЧЕННО В СТОИМОСТЬ БИЛЕТА PRIORITY?</h1>
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
                  <li>Автомобильный пропуск на Парковку.</li>
                  <li>Встреча Посетителей на Парковках, сопровождение до трансфера</li>
                  <li>Выделенный трансфер от Парковок до PRIORITY CHALET.</li>
                  <li>Приоритетная форма прохождения досмотра на КПП.</li>
                  <li>Регистрация по билетам, выдача бейджей категории PRIORITY.</li>
                  <li>Выдача информационных буклетов, путеводителей и расписания летной программы.</li>
                  <li>Буфет с изысканным меню на выбор в течении дня - сервировка «Brunch»; бар с алкогольными напитками; вода и напитки.</li>
                  <li>Высокий уровень обслуживания в течение всего дня пребывания.</li>
                  <li>Обзорная экскурсионная программа по статической экспозиции МАКС с экскурсоводом (по заказу).</li>
                </ul>
                <div className={Style.price_text_alert}>
                  <p>
                    ВНИМАНИЕ!
                    Входной билет PRIORITY НЕ ЯВЛЯЕТСЯ пропуском на автостоянку.
                    Для бронирования Автопропуска на парковку к билетам PRIORITY следует обратиться в контакт-центр по телефону +7 495 258-0000.

                  </p>
                  <p>
                    Дополнительная информация по посещению, предварительной регистрации посетителей, индивидуальному обслуживанию гостей в зоне PRIORITY CHALET:
                    Шарипова Ирина
                    +7 926 545-66-44
                    priority@aviasalon.com
                    sharipovair@yandex.ru

                  </p>
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
