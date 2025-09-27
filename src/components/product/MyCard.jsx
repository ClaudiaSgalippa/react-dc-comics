const MyCard = (props) => {

    const {id, thumb, series, title} = props.comicProp;

    return (
        <div key={id} className="card">
            <img src={thumb} alt={title} />
            <div>{series}</div>
        </div>
    )
}

export default MyCard;