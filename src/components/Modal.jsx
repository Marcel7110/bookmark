import { useEffect, useState } from 'react';
import data from '../data/features.json'
import TextBlock from './TextBlock';
import Close from '../assets/icon-close.svg?react'

const Modal = () => {
    const [isActive, setIsActive] = useState(false)
    const [current, setCurrent] = useState(1)

    let timer = null

    useEffect(() => {
        timer = setTimeout(() => {
            if(isActive !== true){
                let random = Math.floor(Math.random() * 2 + 1)
                setCurrent(random)
                setIsActive(true)
            }
        }, 30000)
        return () => {
            clearTimeout(timer)
        }
    },[])

    useEffect(() => {
        const handleMouse = (e) => {
            if(isActive !== true && e.clientY <= 10){
                let random = Math.floor(Math.random() * 2 + 1)
                setCurrent(random)
                setIsActive(true)
            }
        }
        window.addEventListener('mousemove', handleMouse)

        return () => {
            window.removeEventListener('mousemove', handleMouse)
        }
    },[isActive])

    return (  
        <div className={`background ${isActive ? 'modal-active' : ''}`}>
            <div className="modal layout">
                <button onClick={() => setIsActive(false)} className='modal-button'>
                    <Close/>
                </button>
                <div className='modal-row-1'>
                    <img src={data[current].img} alt={data[current].name}/>
                </div>
                <div className='modal-row-2'>
                    <TextBlock title={data[current].title}>
                        {data[current].content}
                    </TextBlock>
                    <button className='btn btn-main'>More Info</button>
                </div>
            </div>
        </div>
    );
}
 
export default Modal;