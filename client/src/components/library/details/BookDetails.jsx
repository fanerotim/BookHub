import { useParams } from "react-router-dom";
import useBookDetails from "../../../hooks/useBookDetails";
import { useEffect, useState } from "react";

const BookDetails = () => {

    // get bookId
    const { bookId } = useParams();
    const { getDetails } = useBookDetails();
    const [book, setBook] = useState([]);
    
    
    useEffect( () => {
        (async () => {
            const book = await getDetails(bookId);
            setBook((oldBook) => book);
            console.log(book);
        })()
    }, [])

    return (
        <>
            <h1>Welcome to details page</h1>
        </>
    )
}

export default BookDetails;