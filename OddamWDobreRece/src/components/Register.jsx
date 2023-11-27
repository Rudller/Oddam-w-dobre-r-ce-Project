import { useState } from "react";
import { Link as LinkRouter } from "react-router-dom"
import HomeHeader from "./HomeHeader";

export default function Register() {
    const [email, setEmail] = useState('')
    const [emailValid, setEmailValid] = useState(true)
    const [password, setPassword] = useState('')
    const [passwordValid, setPasswordValid] = useState(true)
    const [passwordCheck, setPasswordCheck] = useState('')
    const [passwordCheckValid, setPassordCheckValid] = useState(true)

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const btnHandler = (e) => {
        e.preventDefault()
        const isEmailValid = validateEmail(email)
        const isPasswordValid = password.length >= 6
        const isPasswordChecked = password === passwordCheck
        setEmailValid(isEmailValid)
        setPasswordValid(isPasswordValid)
        setPassordCheckValid(isPasswordChecked)

        if (isEmailValid && isPasswordValid && isPasswordChecked) {
            alert('Pomyślnie utworzono nowe konto')
        }
    }

    return (
        <>
        <HomeHeader />
        <div className="register" id="register">
            <h1 className="title">Załóż konto</h1>
            <img src="../src/assets/Decoration.svg" alt="decoration" />
            <form className="form__container">
                <label>Emali:</label>
                <input 
                    type="text" 
                    name="email" 
                    id="loginEmail" 
                    autoComplete="username" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        borderBottom: emailValid ? '2px solid $grey' : '2px solid red',
                        transition: 'border-bottom 0.3s ease',
                        }}/>
                {!emailValid && <p style={{ color: "red", fontWeight: "bold" }}>Podany email jest nieprawidłowy</p>}
                <label>Hasło:</label>
                <input 
                    type="password" 
                    name="password"
                    id="loginPassword" 
                    autoComplete="new-password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        borderBottom: passwordValid ? '2px solid $grey' : '2px solid red',
                        transition: 'border-bottom 0.3s ease',
                        }}/>
                {!passwordValid && <p style={{ color: "red", fontWeight: "bold" }}>Podane hasło jest za krótkie</p>}
                <label>Powtrórz hasło:</label>
                <input 
                    type="password" 
                    name="passwordCheck" 
                    id="loginPasswordCheck"
                    autoComplete="new-password"
                    value={passwordCheck} 
                    onChange={(e) => setPasswordCheck(e.target.value)}
                    style={{
                        borderBottom: passwordCheckValid ? '2px solid $grey' : '2px solid red',
                        transition: 'border-bottom 0.3s ease',
                        }}/>
                {!passwordCheckValid && <p style={{ color: "red", fontWeight: "bold" }}>Powtórzone hasło nie jest takie same</p>}
            </form>
            <div className="btn__container">
                <LinkRouter to='/logowanie' className="elementBtn">Zaloguj się</LinkRouter>
                <button onClick={btnHandler} className="elementBtn">Załóż konto</button>
            </div>
        </div>
        </>
    )
}