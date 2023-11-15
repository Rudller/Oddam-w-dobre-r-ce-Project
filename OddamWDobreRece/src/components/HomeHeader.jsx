import { Link as LinkScroll } from "react-scroll"
import { Link as LinkRouter } from "react-router-dom"

export default function HomeHeader () {


    return (
        <div className="header__container">
            <div className="login__signin__container">
                <LinkRouter to='/logowanie' className="element">Zaloguj</LinkRouter>
                <LinkRouter to='..' className="element">Załóż konto</LinkRouter>
            </div>
            <div className="nav__container">
                <LinkScroll to='..' className="navElement">Start</LinkScroll>
                <LinkScroll to='..' className="navElement">O co chodzi?</LinkScroll>
                <LinkScroll to='..' className="navElement">O nas</LinkScroll>
                <LinkScroll to='..' className="navElement">Fundacja i organiazajce</LinkScroll>
                <LinkScroll to='..' className="navElement">Kontakt</LinkScroll>             
            </div>
        </div>
    )
}