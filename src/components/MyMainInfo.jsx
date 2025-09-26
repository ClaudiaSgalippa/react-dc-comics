import digitalComics from "../img/buy-comics-digital-comics.png";
import merchandise from "../img/buy-comics-merchandise.png";
import subscription from "../img/buy-comics-subscriptions.png";
import shopLocator from "../img/buy-comics-shop-locator.png";
import powerVisa from "../img/buy-dc-power-visa.svg";

const MyMainInfo = () => {
                                {/*Creo un array con gli oggetti necessari*/}
    const infos = [ 
        {
            id: 1,
            src: digitalComics,
            text: "DIGITAL COMICS",
            alt: "Digital Comics",
        },
        {   
            id: 2,
            src: merchandise,
            text: "DC MERCHANDISE",
            alt: "Merchandise",
        },
        {
            id: 3,
            src: subscription,
            text: "SUBSCRIPTION",
            alt: "Subscription",
        },
        {
            id: 4,
            src: shopLocator,
            text: "COMIC SHOP LOCATOR",
            alt: "Shop Locator",
        },
        {
            id: 5,
            src: powerVisa,
            text: "DC POWER VISA",
            alt: "Power Visa",
        },
    ];

    return (
        <>
            <section className="infoSection">
                {infos.map ((info, index) => (
                    <div className="allTogheter" key={index}>
                        <a href="#"><img src={info.src} alt={info.alt} /></a>
                        <a href="#"><span className="textInfo"> {info.text}</span></a>                        
                    </div>
                    ))
                }
            </section>
        </>
    )
};

export default MyMainInfo



