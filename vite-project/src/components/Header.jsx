import Logo from '../images/logo.svg';
import ArrowDown from '../images/icon-arrow-down.svg'
import ArrowUp from '../images/icon-arrow-up.svg'
import Calendar from '../images/icon-calendar.svg'
import TodoList from '../images/icon-todo.svg'
import Reminders from '../images/icon-reminders.svg'
import Planning from '../images/icon-planning.svg'
import { useState } from 'react';

 const Header = () => {
    const [openFeatures, setOpenFeatures] = useState(false)
    const [openCompany, setOpenCompany] = useState(false)

    return (
        <>
          <header className='header'>
            <div className='header-container'>
                <img className='logo' src={Logo}/>
                <nav  className='nav-bar'>
                  <div>
                    <button onClick={() => setOpenFeatures(!openFeatures)}>Features {openFeatures ? <img src={ArrowUp}/> : <img src={ArrowDown}/>}</button>
                    {openFeatures && <ul>
                        <li>
                            <img className='icon' src={TodoList}/>
                            <p>Todo List</p>
                        </li>
                        <li>
                            <img className='icon' src={Calendar}/>
                            <p>Calendar</p>
                        </li>
                        <li>
                            <img className='icon' src={Reminders}/>
                            <p>Reminders</p>
                        </li>
                        <li>
                            <img className='icon' src={Planning}/>
                            <p>Planning</p>
                        </li>
                    </ul>}
                  </div>
                  <div>
                    <button onClick={() => setOpenCompany(!openCompany)}>Company {openCompany ? <img src={ArrowUp}/> : <img src={ArrowDown}/>}</button>
                    {openCompany && <ul>
                        <li>History</li>
                        <li>Our Team</li>
                        <li>Blog</li>
                    </ul>}
                  </div>
                  <div>
                    <button>Careers</button>
                  </div>
                  <div>
                    <button>About</button>
                  </div>
                </nav>
            </div>
            
            <div className='header-btns'>
                <button>Login</button>
                <button className='register-btn'>Register</button>
            </div>
          </header>
        </>
    )
 }

 export default Header