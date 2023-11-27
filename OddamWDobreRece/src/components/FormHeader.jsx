import { useState } from "react"
import { Link as LinkRouter } from "react-router-dom"
import { Link as LinkScroll } from "react-scroll"

export default function FormHeader() {
    const [userEmail, setUserEmail] = useState('john@doe.com')

    return (
        <div id="formHeader" className="form__header__container">
            <div className="login__signin__container">
                <p className="username">Cześć {userEmail}</p>
                <div className="elementOR">Oddaj rzeczy</div>
                <LinkRouter to='/Wyloguj' className="element">Wyloguj</LinkRouter>
            </div>
            <div className="nav__container">
                <LinkScroll to='homeHeader' smooth={true} duration={500} className="navElement">Start</LinkScroll>
                <LinkScroll to='homeThreeColumns' smooth={true} duration={500} className="navElement">O co chodzi?</LinkScroll>
                <LinkScroll to='homeAboutUs' smooth={true} duration={500} className="navElement">O nas</LinkScroll>
                <LinkScroll to='homeWhoWeHelp' smooth={true} duration={500} className="navElement">Fundacja i organiazajce</LinkScroll>
                <LinkScroll to='homeContact' smooth={true} duration={500} className="navElement">Kontakt</LinkScroll>             
            </div>
        </div>
    )
}