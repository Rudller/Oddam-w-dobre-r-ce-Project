import { Link as LinkScroll } from "react-scroll"
import { Link as LinkRouter } from "react-router-dom"

export default function HomeHeader () {


    return (
        <div id="homeHeader" className="header__container">
            <div className="login__signin__container">
                <LinkRouter to='/logowanie' className="element">Zaloguj</LinkRouter>
                <LinkRouter to='..' className="element">Załóż konto</LinkRouter>
            </div>
            <div className="nav__container">
                <LinkScroll to='homeHeader' smooth={true} duration={500} className="navElement">Start</LinkScroll>
                <LinkScroll to='homeThreeColumns' smooth={true} duration={500} className="navElement">O co chodzi?</LinkScroll>
                <LinkScroll to='..' smooth={true} duration={500} className="navElement">O nas</LinkScroll>
                <LinkScroll to='..' smooth={true} duration={500} className="navElement">Fundacja i organiazajce</LinkScroll>
                <LinkScroll to='..' smooth={true} duration={500} className="navElement">Kontakt</LinkScroll>             
            </div>
        </div>
    )
}