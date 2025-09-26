const MyMainInfo = () => {
                                {/*Creo un array con gli oggetti necessari*/}
    const infos = [ 
        {
            img: "../img/buy-comics-digital-comics.png",
            text: "DIGITAL COMICS",
            alt: "Digital Comics",
        },
        {
            img: "../img/buy-comics-merchandise.png",
            text: "DC MERCHANDISE",
            alt: "Merchandise",
        },
        {
            img: "../img/buy-comics-subscriptions.png",
            text: "SUBSCRIPTION",
            alt: "Subscription",
        },
        {
            img: "../img/buy-comics-shop-locator.png",
            text: "COMIC SHOP LOCATOR",
            alt: "Shop Locator",
        },
        {
            img: "../img/buy-dc-power-visa.svg",
            text: "DC POWER VISA",
            alt: "Power Visa",
        },
    ];

    return (
        <>
            <section className="infoSection">
                {infos.map ((info, index) => (
                    <div className="everythings" key={index}>
                        <a><img src={info.img} alt={info.alt} />{info.text}</a>
                    </div>
                    ))
                }
            </section>
        </>
    )
};

export default MyMainInfo



