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

    const totalItems = fundation.fundations.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

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
                        <div key={i}>
                            <div>
                                <h2>Fundacja `&quot;`{e.name}`&quot;`</h2>
                                <p>Cel i misja: {e.goal}</p>
                            </div>
                            <p>{e.needs}</p>
                        </div>)
                    })}
                </div>
                <div className="pagination__btn__holder">
                    {Array.from({ length: totalPages }).map((_, index) => (
                            <button key={index} onClick={() => handlePageChange(index + 1)}>
                                {index + 1}
                            </button>
                        ))}
                </div>
            </div>}
        </div>
    )
}