import { Link as LinkRouter } from "react-router-dom"

export default function HomeMainSection() {
    return (
        <div className="hero__container">
            <div className="img__container">
                <img src="../src/assets/Home-Hero-Image.jpg" alt="hero image" />
            </div>
            <div className="hero__side__panel">
                <h1>Zacznij pomagać!</h1>
                <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src="../src/assets/Decoration.svg" alt="decoration" />
                <div className="btnHolder">
                    <LinkRouter to='/logowanie' className="elementBtn">ODDAJ RZECZY</LinkRouter>
                    <LinkRouter to='/logowanie' className="elementBtn">ZORGARNIZUJ ZBIÓRKĘ</LinkRouter>
                </div>
            </div>
        </div>
    )
}