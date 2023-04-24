import {FC} from 'react';
import './footer.css'

const Footer: FC = () => {
return(
    <>
<footer className='footer'>
    <div className='footer_container'>
        <p className='footer_main'>ТЭК России</p>
        <p className='footer_descr'>Функционирование и развитие</p>
        <div className='logo_container'>
            <p className='logo_descr'>Дизайн и разработка</p>
            <img className='logo_img' src="https://www.cdu.ru/local/templates/cdu/img/logo-small-bw.png" alt="" />
        </div>
    </div>
</footer>
</>
)
}

export {Footer}