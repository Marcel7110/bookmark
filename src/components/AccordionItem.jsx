import { useState } from "react";
import ArrowIcon from '../assets/icon-arrow.svg?react'

const AccordionItem = ({title, content}) => {
    const [isActive, setIsActive] = useState(false)

    return ( 
        <div className={`accordion-item ${isActive ? 'accordion-item__active' : ''}`}>
            <div className="accordion-item-row-1" onClick={() => setIsActive(prev => !prev)}>
                <h3>{title}</h3>
                <ArrowIcon/>
            </div>
            <div className="accordion-item-row-2">
                <p>{content}</p>
            </div>
        </div>
     );
}
 
export default AccordionItem;