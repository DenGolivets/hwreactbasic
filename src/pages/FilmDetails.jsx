import { Link, useParams } from "react-router-dom";

function FilmDetails() {
    const {filmId} = useParams();
    return (
        <>
    <h1>This is film with ID : {filmId}</h1>
    <Link to={'/home'}>Home</Link>
    </>
    )
}

export default FilmDetails;