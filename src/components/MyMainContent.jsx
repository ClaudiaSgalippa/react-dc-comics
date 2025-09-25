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
};

export default MyMainContent;