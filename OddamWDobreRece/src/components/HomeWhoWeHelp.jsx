import { useState } from "react"

export default function HomeWhoWeHelp() {
    const [organization, setOrganization] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 3;
    const fundation = {
        desc: 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.',
        fundations: [
            {
                name: 'Dbam O Zdrowie',
                goal: 'Pomoc osobom znajdującyym się w trudnej sytuacji życiowej.',
                needs: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
            },
            {
                name: 'Dla Dzieci',
                goal: 'Pomoc dzieciom z ubogich rodzin.',
                needs: 'ubrania, meble, zabawki'
            },
            {
                name: 'Bez Domu',
                goal: 'Pomoc dla osób nie posiadających miejsca zamieszkania',
                needs: 'ubrania, jedzenie, ciepłe koce'
            },
            {
                name: 'Lorem 4',
                goal: 'Loren ipsun dolor sit anet, consectetur adipisci elit.',
                needs: 'anet, elit, consectetur, sit'
            },
            {
                name: 'Lorem 5',
                goal: 'Loren ipsun dolor sit anet, consectetur adipisci elit.',
                needs: 'anet, elit, consectetur, sit'
            },
            {
                name: 'Lorem 6',
                goal: 'Loren ipsun dolor sit anet, consectetur adipisci elit.',
                needs: 'anet, elit, consectetur, sit'
            },
            {
                name: 'Lorem 7',
                goal: 'Loren ipsun dolor sit anet, consectetur adipisci elit.',
                needs: 'anet, elit, consectetur, sit'
            },
            {
                name: 'Lorem 8',
                goal: 'Loren ipsun dolor sit anet, consectetur adipisci elit.',
                needs: 'anet, elit, consectetur, sit'
            },
            {
                name: 'Lorem 9',
                goal: 'Loren ipsun dolor sit anet, consectetur adipisci elit.',
                needs: 'anet, elit, consectetur, sit'
            },
        ]
    }

    const organizacjePozarządowe = {
        desc: 'W naszej bazie znajdziesz listę zweryfikowanych Organizacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.',
        organizations: [
            {
                name: 'Aniołki Serca',
                goal: 'Zapewnienie potrzebującym dzieciom wsparcia materialnego i edukacyjnego.',
                needs: 'Zabawki, ubrania dziecięce, artykuły szkolne'
            },
            {
                name: 'GreenEarth Bez Granic',
                goal: 'Promowanie zrównoważonego rozwoju i ochrona środowiska.',
                needs: 'Zabawki, ubrania dziecięce, artykuły szkolne'
            },
            {
                name: 'SeniorHelp Polska',
                goal: 'Poprawa jakości życia seniorów poprzez dostarczanie im niezbędnych artykułów.',
                needs: 'Artykuły higieniczne, żywność długo trwała, ciepłe ubrania.'
            },
            {
                name: 'Aktywni Seniorzy',
                goal: 'Integracja seniorów poprzez organizację różnorodnych zajęć i wydarzeń.',
                needs: 'Gry planszowe, książki, sprzęt do ćwiczeń fizycznych dla seniorów.'
            },
            {
                name: 'Łapka Wspieranka',
                goal: 'Pomoc bezdomnym zwierzętom, poprawa warunków ich życia.',
                needs: 'Karmy dla zwierząt, kocie legowiska, akcesoria pielęgnacyjne.'
            },
            {
                name: 'Młodzi Artystycznie',
                goal: 'Wspieranie młodych talentów w dziedzinie sztuki i kultury.',
                needs: 'Materiały plastyczne, instrumenty muzyczne, książki artystyczne.'
            },
        ]
    }

    const local = {
        desc: 'W naszej bazie znajdziesz listę zweryfikowanych Lokalnych Zbiórek, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.',
        locals: [
            {
                name: 'Kocie Łapki',
                goal: 'Pomoc bezdomnym zwierzętom na terenie naszej społeczności poprzez zapewnienie im schronienia, opieki weterynaryjnej i jedzenia.',
                needs: 'Karmy dla kotów, koce, legowiska, zabawki dla zwierząt.'
            },
            {
                name: 'Książki dla Wiedzy',
                goal: 'Wspieranie lokalnych szkół i bibliotek poprzez dostarczanie im nowych książek, pomagając w rozwijaniu zasobów edukacyjnych.',
                needs: 'Nowe lub używane książki dla dzieci i młodzieży, materiały edukacyjne.'
            },
            {
                name: 'Ciepłe Serce',
                goal: 'Pomoc mieszkańcom naszego regionu w przygotowaniu się do zimy poprzez dostarczenie ciepłych ubrań i artykułów potrzebnych w chłodne miesiące.',
                needs: 'Ciepłe ubrania (swetry, kurtki, szaliki), rękawice, koce.'
            },
        ]
    }

    const totalItemsFundation = fundation.fundations.length;
    const totalPagesFundation = Math.ceil(totalItemsFundation / itemsPerPage);

    const totalItemsOrganization = organizacjePozarządowe.organizations.length;
    const totalPagesOrganization = Math.ceil(totalItemsOrganization / itemsPerPage);

    const totalItemsLocal = organizacjePozarządowe.organizations.length;
    const totalPagesLocal = Math.ceil(totalItemsLocal / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div id="homeWhoWeHelp" className="who__we__help">
            <h1>Komu pomagamy?</h1>
            <img className="decoration" src="../src/assets/Decoration.svg" alt="decoration" />
            <div className="btnHolder">
                <button onClick={() => setOrganization(1)}>Fundacjom</button>
                <button onClick={() => setOrganization(2)}>Organizacjom pozarządowym</button>
                <button onClick={() => setOrganization(3)}>Lokalnym zbiórkom</button>
            </div>
            {organization === 1 && 
            <div className="desc__container">
                <p className="desc__container__dec">{fundation.desc}</p>
                <div className="desc__container__holder">
                    {fundation.fundations
                        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                        .map((e, i) => {
                        return (
                        <div className="desc__container__holder__element" key={i}>
                            <div>
                                <h2>Fundacja &quot;{e.name}&quot;</h2>
                                <p>Cel i misja: {e.goal}</p>
                            </div>
                            <p className="desc__container__holder__element__p">{e.needs}</p>
                        </div>)
                    })}
                </div>
                <div className="pagination__btn__holder">
                    {Array.from({ length: totalPagesFundation }).map((_, index) => (
                            <button key={index} onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                        ))}
                </div>
            </div>}
            {organization === 2 && 
            <div className="desc__container">
                <p className="desc__container__dec">{organizacjePozarządowe.desc}</p>
                <div className="desc__container__holder">
                    {organizacjePozarządowe.organizations
                        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                        .map((e, i) => {
                        return (
                        <div className="desc__container__holder__element" key={i}>
                            <div>
                                <h2>Fundacja &quot;{e.name}&quot;</h2>
                                <p>Cel i misja: {e.goal}</p>
                            </div>
                            <p className="desc__container__holder__element__p">{e.needs}</p>
                        </div>)
                    })}
                </div>
                <div className="pagination__btn__holder">
                    {Array.from({ length: totalPagesOrganization }).map((_, index) => (
                            <button key={index} onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                        ))}
                </div>
            </div>}
            {organization === 3 && 
            <div className="desc__container">
                <p className="desc__container__dec">{local.desc}</p>
                <div className="desc__container__holder">
                    {local.locals
                        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                        .map((e, i) => {
                        return (
                        <div className="desc__container__holder__element" key={i}>
                            <div>
                                <h2>Fundacja &quot;{e.name}&quot;</h2>
                                <p>Cel i misja: {e.goal}</p>
                            </div>
                            <p className="desc__container__holder__element__p">{e.needs}</p>
                        </div>)
                    })}
                </div>
            </div>}
        </div>
    )
}