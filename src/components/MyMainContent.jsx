import MyComics from "./product/MyComics"; {/*Importiamo l'array di fumetti*/}

const MyMainContent = () => {

    return (
        <>
            <div className="mainContent">
                    <MyComics />
                    <a href="#"><button>LOAD MORE</button></a>
            </div>
        </>
    )
}; {/*Abbiamo creato il container per le card e le abbiamo inserite all'interno, aggiungendo il bottone */}

export default MyMainContent