import { useState } from "react";

export default function HomeContact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [emailValid, setEmailValid] = useState(true);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    
    const validate = () => {
        setEmailValid(validateEmail(email));
      };

    const submitHandler = async (e) => {
        e.preventDefault()

        if (name !== "" && email !== "" && message.length >= 120 && emailValid) {
            console.log(name, email, message)
            const data = {
                name: name,
                email: email,
                message: message
            }

            try {
                const response = await fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
                });
        
                const responseData = await response.json();
        
                if (responseData.status === 'success') {
                  console.log('Formularz wysłany pomyślnie');
                }
              } catch (error) {
                console.error('Wystąpił błąd podczas wysyłania formularza:', error.message);
              }
            
        } else {
            alert("Pola nie mogą być puste lub adres email jest nieprawidłowy.\nUzupełnij pola poprawnie.")
        }
    }

    return (
        <div id="homeContact">
            <div className="homeContact__container">
                <h1>Skontaktuj się z nami</h1>
                <img src="../src/assets/Decoration.svg" alt="Decoration" />
                <form onSubmit={submitHandler}>
                    <div className="upperForm">
                        <div className="nameContainer">
                            <label>Wpisz swoje imię</label>
                            <input name="name" id="name" placeholder="Krzysztof" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="emailContainer">
                            <label>Wpisz swój email</label>
                            <input name="email" id="email" placeholder="abc@xyz.pl" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validate} />
                        </div>
                    </div>
                    <div className="lowerForm">
                        <label>Wpisz swoją wiadomość</label>
                        <textarea placeholder="Lorem ipsum" value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <button type="submit">Wyślij</button>
                </form>
            </div>
            <div className="footer">
                <p>Copyright by Coders Lab</p>
                <div className="socials__icon__container">
                    <img src="../src/assets/Facebook.svg" alt="Facebook Icon" />
                    <img src="../src/assets/Instagram.svg" alt="Instagram Icon" />
                </div>
            </div>
        </div>
    )
}