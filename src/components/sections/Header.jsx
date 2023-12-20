import { useEffect, useState } from "react";
import FbIcon from '../../assets/icon-facebook.svg?react'
import TtIcon from '../../assets/icon-twitter.svg?react'
import Logo from '../../assets/logo-bookmark.svg?react'
import Close from '../../assets/icon-close.svg?react'
import Menu from '../../assets/icon-hamburger.svg?react'

const Header = () => {
    const [isActive, setIsActive] = useState(false)

    const handleActivate = (value) => {
        document.querySelector('body').style.overflowY = value ? 'hidden' : 'scroll'
        setIsActive(value)
    }

    useEffect(() => {
        const handleResize = () => {
            if(isActive === true && window.innerWidth >= 1023){
                setIsActive(false)
                document.querySelector('body').style.overflowY = 'scroll'
            }
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[isActive])

    return ( 
        <header>
            <nav className={isActive ? 'nav-open' : ''}>
                <div>
                    <Logo className='header-logo'/>
                    <button onClick={() => handleActivate(isActive ? false : true)}>
                        {isActive ? <Close/> : <Menu/>}
                    </button>
                </div>
                <menu>
                    <li>
                        <a href="#" onClick={() => handleActivate(false)}>FEATURES</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => handleActivate(false)}>PRICING</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => handleActivate(false)}>CONTACT</a>
                    </li>
                    <li className="login">
                        <a href="#" onClick={() => handleActivate(false)}>LOGIN</a>
                    </li>
                    <div className="header-socials">
                        <a href="#" onClick={() => handleActivate(false)}>
                            <FbIcon/>
                        </a>
                        <a href="#" onClick={() => handleActivate(false)}>
                            <TtIcon/>
                        </a>
                    </div>
                </menu>
            </nav>
        </header>
     );
}
 
export default Header;