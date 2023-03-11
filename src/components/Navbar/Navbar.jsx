import React from 'react'
import { Link } from 'react-router-dom'
import { AboutMe_URL, HOME_URL, LOGIN_URL, PROFILE_URL, REGISTER_URL, SKILLS_URL } from '../../constants/urls'
import Styles from './Navbar.module.css'
export function Navbar() {
  return (
    <>
        {/* Navbar */}

        <div className={Styles.Container}>
            
            <header className={Styles.header}>

                <ul className={Styles.navLinks}>

                    <li>
                        <Link to={HOME_URL} className={Styles.Links}>
                            <span> Home </span>
                        </Link>
                    </li>

                    <li>
                        <Link to = {PROFILE_URL} className={Styles.Links}>
                            <span> Profile </span>
                        </Link>
                    </li>
                    <li>
                        <Link to = {AboutMe_URL} className={Styles.Links}>
                            <span>About Me</span>
                        </Link>
                    </li>
                    <li>
                        <Link to = {SKILLS_URL} className = {Styles.Links}>
                            <span>Skills</span>
                        </Link>
                    </li>

                </ul>

                <ul className={Styles.navLinksRegister} >
                    
                    <li>
                        <Link to = {LOGIN_URL} className = {Styles.Links}>
                            <span>Login</span>
                        </Link>
                    </li>
                    <li>
                        <Link to = {REGISTER_URL} className = {Styles.Links}>
                            <span>Register</span>
                        </Link>
                    </li>
                </ul>

            </header>
        </div>       
        
    
    </>
 
  )
}
