export default function FormMainSection() {
    return (
        <>
            <div className="form__main__section">
                <img className="form__main__section__hero" src="../src/assets/Form-Hero-Image.jpg" alt="Form-Hero-Image" />
                <div className="right__side">
                    <h1>Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h1>
                    <img src="../src/assets/Decoration.svg" alt="decoration" />
                    <h2>Wystarczą 4 proste kroki:</h2>
                    <div className="right__side__bottom">
                        <div className="right__side__bottom__element">
                            <h3>1</h3>
                            <p>Wybierz rzeczy</p>
                        </div>
                        <div className="right__side__bottom__element">
                            <h3>2</h3>
                            <p>Spakuj je w worki</p>
                        </div>
                        <div className="right__side__bottom__element">
                            <h3>3</h3>
                            <p>Wybierz fundację</p>
                        </div>
                        <div className="right__side__bottom__element">
                            <h3>4</h3>
                            <p>Zamów kuriera</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="important">
                <h4>Ważne!</h4>
                <p>Wszystkie oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz <a>TUTAJ.</a></p>
            </div>
        </>
    )
}