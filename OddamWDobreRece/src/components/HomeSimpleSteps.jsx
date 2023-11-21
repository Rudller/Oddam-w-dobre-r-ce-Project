import { Link as LinkRouter } from "react-router-dom"

export default function HomeSimpleSteps() {
    return (
        <div className="simple__steps">
            <h1>Wystarczą 4 proste kroki</h1>
            <img src="../src/assets/Decoration.svg" alt="decoration" />
            <div className="simple__steps__container">
                <div className="simple__steps__element">
                    <img src="../src/assets/Icon-1.svg" alt="Koszula" />
                    <h2>Wybierz rzeczy</h2>
                    <h3>__________</h3>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="simple__steps__element">
                    <img src="../src/assets/Icon-2.svg" alt="Torba" />
                    <h2>Spakuj je</h2>
                    <h3>__________</h3>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="simple__steps__element">
                    <img src="../src/assets/Icon-3.svg" alt="lupa" />
                    <h2>Zdecyduj komu chcesz pomóc</h2>
                    <h3>__________</h3>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="simple__steps__element">
                    <img src="../src/assets/Icon-4.svg" alt="Strzałki" />
                    <h2>Zamów kuriera</h2>
                    <h3>__________</h3>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <LinkRouter to='/logowanie' className="elementBtn">ODDAJ RZECZY</LinkRouter>
        </div>
    )
}