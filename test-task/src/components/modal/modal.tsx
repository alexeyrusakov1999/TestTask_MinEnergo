import {FC, useState} from 'react';
import './modal.css'
import {AiOutlineMenu} from 'react-icons/ai'

const Modal: FC = () => {
const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

const handleButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };



    return(
        <>
        <AiOutlineMenu className='menu_btn' onClick={handleButtonClick}/>

        {isModalOpen && (
            <div className="Modal">
            <div className="Modal-content">
              <span className="Modal-close" onClick={handleButtonClick}>
                &times;
              </span>
              <div className="modal-header">
      <h2 className='modal_title'>Основные тенденции и факторы</h2>
    </div>
    <div className="modal-body">
      <div className="modal-sections">
        <section className="modal-section">
          <h3 className='section-title'>Добыча</h3>
          <hr className="section-divider"/>
          <ul>
            <li className="list_item bold">Нефти и газового конденсата</li>
            <li className="list_item small">Всего</li>
            <li className="list_item small">ВИНК</li>
            <li className="list_item small">Независимые производители</li>
            <li className="list_item small">СРП</li>
            <li className="list_item bold">В разрезе регионов страны</li>
            <li className="list_item bold">На новых месторождениях("гринфилдах")</li>
            <li className="list_item bold">На шельфе</li>
          </ul>
        </section>
        <section className="modal-section">
          <h3 className='section-title'>Экспорт</h3>
          <hr className="section-divider"/>
          <ul>
            <li className="list_item bold">Экспорт нефти из России</li>
            <li className="list_item small">Всего</li>
            <li className="list_item small">ВИНК</li>
            <li className="list_item small">Независимые производители</li>
            <li className="list_item small">СРП</li>
            <li className="list_item bold">По направлениям</li>
            <li className="list_item bold">Основные транспортные коридоры экспорта нефти</li>
          </ul>
        </section>
        <section className="modal-section">
          <h3 className='section-title'>Технологические показатели</h3>
          <hr className="section-divider"/>
          <ul>
            <li className="list_item">Капитальные вложения ВИНК в нефтедобычу</li>
            <li className="list_item">Бурение</li>
            <li className="list_item">Ввод новых скважин</li>
            <li className="list_item">Закачка воды для поддержания пластового давления</li>
          </ul>
        </section>
        <section className="modal-section">
          <h3 className='section-title'>Развитие</h3>
          <hr className="section-divider"/>
          <ul>
            <li className="list_item bold">Магистральные нефтепроводы Российской Федерации</li>
            <li className="list_item bold">Проекты российских компаний за рубежом</li>
          </ul>
        </section>
        </div>
        </div>
      </div>
    </div>
        )}
        </>
    )
}

export {Modal}