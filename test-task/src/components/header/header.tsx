import './header.css'
import {FC} from 'react'
import {AiOutlineDownload} from 'react-icons/ai'
import { Modal } from '../modal/modal'

const Header: FC = () => {
return (
    <div className='main_header_container'>
        <div className='header_container'>
        <h1 className='main_name'>НЕФТЯНАЯ ПРОМЫШЛЕННОСТЬ <Modal/></h1>
        <p className='save_doc'>
            <a href="" className='link'><AiOutlineDownload className='download_btn'/> скачать отчет </a>
        </p>
        </div>
        <h2 className='h2_name'>ВВОД НОВЫХ СКВАЖИН</h2>
    </div>
)
}

export {Header};