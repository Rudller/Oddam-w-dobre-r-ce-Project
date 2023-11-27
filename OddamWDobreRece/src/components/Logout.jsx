import HomeHeader from "./HomeHeader";
import { Link as LinkRouter } from "react-router-dom"

export default function Logout() {
    return (
        <>
        <HomeHeader />
        <div className="logout" id="logout">
            <h1>Wylogowanie nastąpiło pomyślnie!</h1>
            <img src="../src/assets/Decoration.svg" alt="decoration" />
            <LinkRouter to='/' className="elementBtn">Strona główna</LinkRouter>
        </div>
        </>
    )
}