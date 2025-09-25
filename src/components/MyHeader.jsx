import logoDC from "../img/dc-logo.png"; {/*Importiamo l'immagine del logo*/}

const MyHeader = () => { {/*Creiamo la costante per l'header*/}

    const navUpper = ["CHARACTERS","COMICS","MOVIES","TV","GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"]; {/*Creaiamo l'array per la navigazione*/}

    return ( 
        <>
            <header>
                <div className="fullHeaderContainer">
                    <img className="logo" src={logoDC} alt="Logo DC" />
                    <nav>
                        <ul className="navSite">
                            {navUpper.map ((navUp, index) => ( 
                                <li keys={index}>{navUp}</li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}; {/*Abbiamo usato Map per creare un nuovo array che contiene gli <li> */}

export default MyHeader