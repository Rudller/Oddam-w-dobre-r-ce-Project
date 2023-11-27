import { useState } from "react"
import { Link as LinkRouter } from "react-router-dom"
import HomeHeader from "./HomeHeader"

export default function Login() {
    const [email, setEmail] = useState('')
    const [emailValid, setEmailValid] = useState(true)
    const [password, setPassword] = useState('')
    const [passwordValid, setPasswordValid] = useState(true)

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const btnHandler = (e) => {
        e.preventDefault()
        const isEmailValid = validateEmail(email)
        const isPasswordValid = password.length >= 6
        setEmailValid(isEmailValid)
        setPasswordValid(isPasswordValid)

        if (isEmailValid && isPasswordValid) {
            alert('Pomyślnie zalogowano')
        }
    }

    return (
        <>
        <HomeHeader />
        <div className="login" id="login">
            <h1 className="title">Zaloguj się</h1>
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
                        }} />
                {!emailValid && <p style={{ color: "red", fontWeight: "bold" }}>Podany email jest nieprawidłowy</p>}
                <label>Hasło:</label>
                <input 
                    type="password" 
                    name="password" 
                    id="loginPassword" 
                    autoComplete="current-password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        borderBottom: passwordValid ? '2px solid $grey' : '2px solid red',
                        transition: 'border-bottom 0.3s ease',
                        }} />
                {!passwordValid && <p style={{ color: "red", fontWeight: "bold" }}>Podane hasło jest za krótkie</p>}
            </form>
            <div className="btn__container">
                <LinkRouter to='/rejestracja' className="elementBtn">Załóż konto</LinkRouter>
                <button onClick={btnHandler} className="elementBtn">Zaloguj się</button>
            </div>
        </div>
        </>
    )
}