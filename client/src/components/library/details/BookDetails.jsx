import { useParams } from "react-router-dom";

const Details = () => {

    const bookId = useParams();
    console.log(bookId);

    return (
        <>
            <h1>Welcome to details page</h1>
        </>
    )
}

export default BookDetails;