const MyNavbar = () => {

    const dcComics = ["Characters", "Comics", "Movies", "TV", "Games", "Videos", "News"];
    const dcShop = ["Shop DC", "Shop DC Collectibles"];
    const dcDc = ["Terms Of Use", "Privacy policy News", "Ad Choices", "Adversting", "Jobs", "Subscription", "Talent Workshops", "CPSC Certificates", "Ratings", "Shop Help", "Contact Us"];
    const dcSites = ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"];

    return (
       <section className="allLinksSites">
            <div className="containerSites">
                <div className="justForPadding">
                    <h2>DC COMICS</h2>
                    <ul>
                        {dcComics.map((navDown, index) => (
                            <li key={index}><a href="#" className="noColorDown">{navDown}</a></li>
                        ))}
                    </ul>
                    <br />
                    <h2>SHOP</h2>
                    <ul>
                        {dcShop.map((navDown, index) => (
                            <li key={index}><a href="#" className="noColorDown">{navDown}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="justForPadding">
                    <h2>DC</h2>
                    <ul>
                        {dcDc.map((navDown, index) => (
                            <li key={index}><a href="#" className="noColorDown">{navDown}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="justForPadding">
                    <h2>SITES</h2>
                    <ul>
                        {dcSites.map((navDown, index) => (
                            <li key={index}><a href="#" className="noColorDown">{navDown}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
       </section> 
    )
}

export default MyNavbar